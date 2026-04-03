<script lang="ts">
  import { page } from "$app/state";
  import Seo from "sk-seo";
  import type { Snippet } from "svelte";
  import Version from "./reusables/Version.svelte";

  type Props = {
    title: string;
    description: string;
    tags: string;
    version: string;
    children: Snippet;
  };

  const { children, title, description, version, tags = "" }: Props = $props();

  let tagsArr = tags
    .split(",")
    .map(el => el.trim())
    .filter(String);
</script>

<Seo
  title="{title ? title + ' - ' : ''} Modpack Dev Wiki"
  {description}
  author="Modpack Dev Wiki"
  siteName="Modpack Dev Wiki"
  keywords="datapacks, modpack dev wiki, datapack docs, minecraft datapacks, datapack help, datapack creation, dph"
  name="Modpack Dev Wiki"
  schemaOrg={true}
  canonical="https://modpack-dev-knowledgebase.github.io/modpack-dev-wiki{page.url.pathname}"
  socials={[
    "https://discord.gg/PLACEHOLDER"
  ]} />

<main class="md px-4 md:px-8 lg:px-16 prose-headings:text-stone-200" id="main_content">
  {#if version}
    <Version {version} />
  {/if}
  {@render children()}
  {#if tags}
    <div class="bg-stone-950/40 p-2 rounded-lg flex items-center flex-wrap gap-3 my-10">
      <span class="uppercase text-sm text-zinc-500">Tags:</span>
      {#each tagsArr as tag}
        <span class="border border-yellow-500 px-1 text-yellow-500 rounded-lg uppercase text-sm">{tag}</span>
      {/each}
    </div>
  {/if}
</main>
