import { component$ } from "@builder.io/qwik";

import { Link } from "@builder.io/qwik-city";
import { User } from "../user";

export const MetaSidebar = component$(() => {
  return (
    <aside class="pl-12 py-6 sticky top-0">
      <ul class="menu bg-base-200 w-full rounded-box p-0">
        <li class="menu-title text-xl text-base-content py-4">Who to follow</li>
        {[...new Array(6)].map((_, i) => (
          <User key={i} />
        ))}
        <li>
          <Link
            href="/"
            class="rounded-t-none py-4 font-medium text-md rounded-b-box"
          >
            Show more
          </Link>
        </li>
      </ul>
    </aside>
  );
});