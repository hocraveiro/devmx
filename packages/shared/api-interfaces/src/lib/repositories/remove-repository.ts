export interface RemoveRepository {
  remove(id: string): Promise<void>;
}
