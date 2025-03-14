import { randomUUID } from "crypto";


const Coordinator: Map<string, ()=>void> = new Map<string, ()=>void>()

export type AppController = {
    id: string
    destroy: () => void
}
export function createAppMetadata(): AppController {
    const id = randomUUID()
    return {id, destroy: ()=>{ Coordinator.delete(id)}}
}