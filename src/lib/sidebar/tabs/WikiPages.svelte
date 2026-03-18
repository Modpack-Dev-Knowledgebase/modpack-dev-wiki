<script lang="ts">
  // Page imports
  import SidebarPage from "$lib/sidebar/navigation/SidebarPage.svelte";
  import SidebarCategory from "$lib/sidebar/navigation/SidebarCategory.svelte";
  import SidebarHeading from "$lib/sidebar/navigation/SidebarHeading.svelte";
  import SidebarPlaceholder from "$lib/sidebar/navigation/SidebarPlaceholder.svelte";

  // Icon imports
  // https://tabler-icons.io
  // import Icon<whatever name> from "~icons/tabler/<icon ID>"

  import IconHome from "~icons/tabler/home";
  import IconAt from "~icons/tabler/at";
  import IconZip from "~icons/tabler/file-zip";
  import IconPennant from "~icons/tabler/pennant";
  import IconCommand from "~icons/tabler/slash";
  import IconCommands from "~icons/tabler/terminal";
  import IconBraces from "~icons/tabler/braces";
  import IconStar from "~icons/tabler/star";
  import IconGrid from "~icons/tabler/grid-3x3";
  import IconPredicate from "~icons/tabler/bleach";
  import IconChest from "~icons/tabler/brand-minecraft";
  import IconFilters from "~icons/tabler/filters";
  import IconList from "~icons/tabler/list-details";
  import IconComponents from "~icons/tabler/brackets-contain";
  import IconTilde from "~icons/tabler/tilde";
  import IconInfo from "~icons/tabler/info-circle";
  import IconBreak from "~icons/tabler/egg-cracked";
  import IconResourceLocation from "~icons/tabler/abc";
  import IconScoreboard from "~icons/tabler/Table";
  import IconRange from "~icons/tabler/math-lower";
  import IconConcepts from "~icons/tabler/blocks";
  import IconDialog from "~icons/tabler/category-2";
  import IconBackhoe from "~icons/tabler/backhoe";
  import IconMountain from "~icons/tabler/mountain";
  import IconBuildingCastle from "~icons/tabler/building-castle";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarCategory name="Info" icon={IconInfo}>
  <SidebarPage label="Free Multiplayer" icon={IconBraces} page="/wiki/info/free-multiplayer" />
  <SidebarPage label="mcmeta Filtering" icon={IconBraces} page="/wiki/info/mcmeta-filtering" />
  <SidebarPage label="Licenses" icon={IconBraces} page="/wiki/info/licenses" />
</SidebarCategory>

<SidebarCategory name="Creative" icon={IconConcepts}>
  <SidebarPage label="Pack Design" icon={IconCommand} page="/wiki/creative/pack-design" />
</SidebarCategory>

<SidebarCategory name="Organization" icon={IconZip}>
  <SidebarPage label="Planning" icon={IconPennant} page="/wiki/organization/planning" />
  <SidebarPage label="Project Management" icon={IconPennant} page="/wiki/organization/project-management" />
  <SidebarPage label="Marketing" icon={IconPennant} page="/wiki/organization/marketing" />
</SidebarCategory>

<SidebarCategory name="Command Reference" icon={IconCommands}>
  <SidebarHeading label="Commonly Used" />
  <SidebarPage label="function" icon={IconCommand} page="/wiki/command/function" />
  <SidebarPage label="execute" icon={IconCommand} page="/wiki/command/execute" />
  <SidebarPage label="summon" icon={IconCommand} page="/wiki/command/summon" />
  <SidebarPage label="data" icon={IconCommand} page="/wiki/command/data" />
</SidebarCategory>

<SidebarCategory name="NBT and Scoreboards" icon={IconBraces}>
  <SidebarPage label="NBT data" icon={IconBraces} page="/wiki/nbt-scoreboards/nbt" />
  <SidebarPage label="Scoreboards" icon={IconScoreboard} page="/wiki/nbt-scoreboards/scoreboards" />
</SidebarCategory>

<SidebarCategory name="World Generation" icon={IconBackhoe}>
  <SidebarPage label="Custom World Generation" icon={IconMountain} page="/wiki/worldgen/custom-worldgen"></SidebarPage>
  <SidebarPlaceholder label="Custom Structures" icon={IconBuildingCastle}></SidebarPlaceholder>
</SidebarCategory>
