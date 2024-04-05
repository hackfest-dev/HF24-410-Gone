// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { userTable, departmentTable, commemtsTable, citizenTable, voteTable, departmentTypeTable } from "$lib/server/db/schema";

declare global {
	type User = InferSelectModel<typeof userTable>
	type Department = InferSelectModel<typeof departmentTable>
	type Comment = InferSelectModel<typeof commemtsTable>
	type Vote = InferSelectModel<typeof voteTable>
	type Citizen = InferSelectModel<typeof citizenTable>
	type Post = InferSelectModel<typeof postTable>
	type departmentType = InferSelectModel<typeof departmentTypeTable>

	namespace App {
		// interface Error {}
		interface Locals {
			user: User | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
