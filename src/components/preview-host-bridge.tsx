/**
 * Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
 * (and later receive registered routes). Noops when the app is not embedded.
 */

import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import {
  collectRoutePathsFromTree,
  installPreviewHostBridge,
} from "@/lib/preview-host-bridge";

export function PreviewHostBridge() {
  const router = useRouter();

  useEffect(() => {
    return installPreviewHostBridge({
      navigate: (path) => {
        const next = path.startsWith("/") ? path : `/${path}`;
        const here = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        if (next === here || next === window.location.pathname) return;
        router.history.push(next);
      },
      getRoutePaths: () => collectRoutePathsFromTree(router.routeTree),
    });
  }, [router]);

  return null;
}
