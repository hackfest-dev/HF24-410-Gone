import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text, primaryKey, blob } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable('user', {
    id: text("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
    type: text('type', { enum: ['Citizen', 'Department'] }).notNull(),
})

export const regionTable = sqliteTable('region', {
    region: text("id"),
    pincode: integer("pincode"),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.region, table.pincode] }),
    }
})

export const departmentTypeTable = sqliteTable("departmentType", {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull().unique()
})

export const departmentTable = sqliteTable('department', {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    scope: integer("scope").notNull(),
    type: text("type").references(() => departmentTypeTable.id).notNull(),
    region: integer('region').references(() => regionTable.region).notNull(),
})

export const citizenTable = sqliteTable('citizen', {
    id: text("id").primaryKey(),
    aadhaarNo: text("aadhaarNo").notNull().unique(),
    dob: text("dob").notNull(),
    gender: text('gender', { enum: ['M', 'F'] }).notNull(),
    name: text("name").notNull(),
    phone: text("phone").notNull(),
    email: text("email").notNull().unique(),
    building: text("building"),
    landmark: text("landmark"),
    street: text("street"),
    locality: text("locality"),
    vtc: text("vtc"),
    subdist: text("subdist"),
    district: text("district"),
    state: text("state"),
    pincode: text("pincode").notNull(),
    joinedOn: integer('joined_on')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});

export const postTable = sqliteTable('post', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    latitude: text("latitude").notNull(),
    longitude: text("longitude").notNull(),
    pincode: text("pincode"),
    image: blob('blob', { mode: 'buffer' }),
    complaintType: text('complaintType', { enum: ['association', 'group', 'individual', 'individual'] }).notNull(),
    departmentType: integer("departmentId").references(() => departmentTypeTable.id).notNull(),
    userId: text("user").references(() => userTable.id).notNull(),
    scope: integer("scope").default(1),
    status: integer('status', { mode: 'boolean' }).default(false),
    createdAt: integer('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});

export const commentsTable = sqliteTable('comment', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer("user_id").references(() => userTable.id).notNull(),
    postId: integer("postId").references(() => postTable.id).notNull(),
    content: text("content"),
    createdAt: integer('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});

export const voteTable = sqliteTable('vote', {
    userId: integer("user_id").references(() => userTable.id).notNull(),
    postId: integer("postId").references(() => postTable.id).notNull(),
    choice: text('choice', { enum: ['upvote', 'downvote', "none"] }).default("none").notNull()
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.userId, table.postId] }),
    }
})
