import "./video.scss";

import { NoiaClient } from "@noia-network/sdk";
import { bytesToBase64 } from "../../base64";

export async function run(
  container: HTMLElement,
  noiaClient: NoiaClient
): Promise<void> {
  console.info("Video example.");
  container.className = "video-example";
  container.innerHTML = `<div class="loader" />`;

  // Load video bytes
  const videoBytes = await noiaClient.download({
    src: "https://noia.network/samples/video.mp4"
  });

  console.info(`Video downloaded (${videoBytes.length} bytes)`);

  // Render video
  const videoType = "video/mp4";
  container.innerHTML = `
<video controls>
    <source type="video/mp4" src="data:${videoType};base64,${bytesToBase64(
    videoBytes
  )}">
</video>`;
}
