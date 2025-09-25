-- CreateTable
CREATE TABLE "public"."User" (
    "id" BIGSERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Chatroom" (
    "id" BIGSERIAL NOT NULL,
    "userid" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Chats" (
    "id" BIGSERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "roomid" BIGINT NOT NULL,
    "userid" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "public"."User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Chatroom_id_key" ON "public"."Chatroom"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Chats_id_key" ON "public"."Chats"("id");

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
