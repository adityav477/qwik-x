import { type QRL, component$ } from "@builder.io/qwik";
import { Visibility } from "./visibility";
import { ReplyPrivacy } from "./reply-privacy";
import {
  EmojiOutlineIcon,
  GifOutlineIcon,
  ImageOutlineIcon,
} from "~/icons/media";
import { Form } from "@builder.io/qwik-city";
import { useCreatePost } from "~/routes/(app)/layout";
import { Button } from "../ui/button";

type Props = {
  onComplete$: QRL<() => void>;
};
export const PostForm = component$((props: Props) => {
  const { onComplete$ } = props;
  const actionSig = useCreatePost();
  return (
    <Form
      action={actionSig}
      onSubmitCompleted$={(_, form) => {
        form.reset();
        onComplete$();
      }}
    >
      <article class="card">
        <div class="card-body p-0">
          <div class="flex gap-3">
            <div class="flex-none">
              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img
                    width={64}
                    height={64}
                    src="https://avatars.githubusercontent.com/u/57381638?v=4"
                  />
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col gap-4">
              <Visibility />
              <textarea
                class="textarea textarea-lg focus:outline-transparent p-0"
                placeholder="What is happening ?"
                rows={6}
                autoFocus
                name="text"
              />
            </div>
          </div>
          <ReplyPrivacy />
          <div class="divider my-2"></div>
          <div class="card-actions flex justify-between gap-4 items-center">
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-sm btn-ghost btn-circle">
                <ImageOutlineIcon />
              </button>
              <button type="button" class="btn btn-sm btn-ghost btn-circle">
                <GifOutlineIcon />
              </button>
              <button type="button" class="btn btn-sm btn-ghost btn-circle">
                <EmojiOutlineIcon />
              </button>
            </div>
            <div>
              <Button
                type="submit"
                colorScheme="btn-primary"
                loading={actionSig.isRunning}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Form>
  );
});