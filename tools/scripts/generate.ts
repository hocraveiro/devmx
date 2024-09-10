import { ListrEnquirerPromptAdapter } from '@listr2/prompt-adapter-enquirer';

import { delay, Listr, ListrLogger, ListrLogLevels } from 'listr2';

interface Ctx {
  input: boolean | Record<PropertyKey, boolean>;
}

const logger = new ListrLogger({ useIcons: false });

let task: Listr<Ctx>;

logger.log(ListrLogLevels.STARTED, 'Example for getting user input.');

task = new Listr<Ctx>(
  [
    {
      title: 'This task will get your input.',
      task: async (ctx, task): Promise<Record<PropertyKey, boolean>> =>
        (ctx.input = await task
          .prompt(ListrEnquirerPromptAdapter)
          .run<{ test: boolean; other: boolean }>([
            {
              type: 'Select',
              name: 'first',
              message: 'Please select something',
              choices: ['A', 'B', 'C'],
              validate: (response): boolean | string => {
                //  i do declare you valid!
                if (response === 'A') {
                  return true;
                }

                return false;
              },
            },
            {
              type: 'Input',
              name: 'second',
              message: 'Please type something in:',
            },
            {
              type: 'Numeral',
              name: 'third',
              message: 'I need a number badly',
            },
          ])),
    },
    {
      title: 'Now I will show the input value.',
      task: (ctx, task): void => {
        task.output = ['%o', ctx.input];
      },
      rendererOptions: {
        persistentOutput: true,
      },
    },
  ],
  { concurrent: false }
);

(async () => {
  try {
    const context = await task.run();

    logger.log(ListrLogLevels.COMPLETED, ['ctx: %o', context]);
  } catch (e: any) {
    logger.log(ListrLogLevels.FAILED, e);
  }
})();

logger.log(
  ListrLogLevels.STARTED,
  'You can go ahead with complicated functions with prompts as well.'
);
task = new Listr<Ctx>(
  [
    {
      title: 'This task will get your input.',
      task: async (ctx, task): Promise<void> => {
        ctx.input = await task
          .prompt(ListrEnquirerPromptAdapter)
          .run<boolean>({ type: 'Toggle', message: 'Do you love me?' });

        // do something
        if (ctx.input === false) {
          throw new Error(':/');
        }
      },
    },
  ],
  { concurrent: false }
);
