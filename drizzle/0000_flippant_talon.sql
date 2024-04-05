CREATE TABLE `citizen` (
	`id` text PRIMARY KEY NOT NULL,
	`aadhaarNo` text NOT NULL,
	`dob` text NOT NULL,
	`gender` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`building` text,
	`landmark` text,
	`street` text,
	`locality` text,
	`vtc` text,
	`subdist` text,
	`district` text,
	`state` text,
	`pincode` text NOT NULL,
	`joined_on` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `comment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`postId` integer NOT NULL,
	`content` text,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `department` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`scope` integer NOT NULL,
	`type` text NOT NULL,
	`region` integer NOT NULL,
	FOREIGN KEY (`type`) REFERENCES `departmentType`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`region`) REFERENCES `region`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `departmentType` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `post` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`latitude` text NOT NULL,
	`longitude` text NOT NULL,
	`pincode` integer,
	`image` text,
	`complaintType` text NOT NULL,
	`departmentId` integer NOT NULL,
	`author_id` integer NOT NULL,
	`scope` integer DEFAULT 1,
	`status` integer,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`departmentId`) REFERENCES `departmentType`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `region` (
	`id` text,
	`pincode` integer,
	PRIMARY KEY(`id`, `pincode`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL,
	`gender` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `vote` (
	`user_id` integer NOT NULL,
	`postId` integer NOT NULL,
	`choice` text DEFAULT 'none' NOT NULL,
	PRIMARY KEY(`postId`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `citizen_aadhaarNo_unique` ON `citizen` (`aadhaarNo`);--> statement-breakpoint
CREATE UNIQUE INDEX `citizen_email_unique` ON `citizen` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `departmentType_name_unique` ON `departmentType` (`name`);