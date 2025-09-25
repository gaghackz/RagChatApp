-- CreateTable
CREATE TABLE "public"."User" (
    "id" BIGSERIAL NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Chatroom" (
    "id" BIGSERIAL NOT NULL,
    "userid" BIGINT NOT NULL,

    CONSTRAINT "Chatroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Chats" (
    "id" BIGSERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "roomid" BIGINT NOT NULL,
    "userid" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "Chats_roomid_idx" ON "public"."Chats"("roomid");

-- CreateIndex
CREATE INDEX "Chats_userid_idx" ON "public"."Chats"("userid");

-- CreateIndex
CREATE INDEX "Chats_roomid_createdAt_idx" ON "public"."Chats"("roomid", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."Chatroom" ADD CONSTRAINT "Chatroom_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chats" ADD CONSTRAINT "Chats_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chats" ADD CONSTRAINT "Chats_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "public"."Chatroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
