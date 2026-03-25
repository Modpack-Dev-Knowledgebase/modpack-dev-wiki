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
  <SidebarPage label="Licenses" icon={IconBraces} page="/wiki/info/licenses" />
  <SidebarPage label="Neo/Forge Data Conditions" icon={IconBraces} page="/wiki/info/neoforge-data-conditions" />
  <SidebarPage label="Performance Mods" icon={IconBraces} page="/wiki/info/performance-mods" />
  <SidebarPage label="Regex" icon={IconBraces} page="/wiki/info/regex" />
  <SidebarPage label="Useful Tags" icon={IconBraces} page="/wiki/info/useful-tags" />
  <SidebarPage label="Version Control" icon={IconBraces} page="/wiki/info/version-control-tools" />
</SidebarCategory>

<SidebarCategory name="Useful Terms" icon={IconConcepts}>
  <SidebarPage label="Closed Source" icon={IconBraces} page="/wiki/info/useful-terms/closed-source" />
  <SidebarPage label="Open Source" icon={IconBraces} page="/wiki/info/useful-terms/open-source" />
  <SidebarPage label="Visible Source" icon={IconBraces} page="/wiki/info/useful-terms/visible-source" />
  <SidebarPage label="Kitchen Sink" icon={IconBraces} page="/wiki/info/useful-terms/kitchen-sink" />
  <SidebarPage label="Tags" icon={IconBraces} page="/wiki/info/useful-terms/tags" />
  <SidebarPage label="Vanilla+" icon={IconBraces} page="/wiki/info/useful-terms/vanilla+" />
  <SidebarPage label="worldgen-feature" icon={IconBraces} page="/wiki/info/useful-terms/worldgen-feature" />
  <SidebarPage label="worldgen-structure" icon={IconBraces} page="/wiki/info/useful-terms/worldgen-structure" />
</SidebarCategory>

<SidebarCategory name="Creative" icon={IconConcepts}>
  <SidebarPage label="Pack Design" icon={IconCommand} page="/wiki/creative/pack-design" />
</SidebarCategory>

<SidebarCategory name="Organization" icon={IconZip}>
  <SidebarPage label="Planning" icon={IconPennant} page="/wiki/organization/planning" />
  <SidebarPage label="Project Management" icon={IconPennant} page="/wiki/organization/project-management" />
  <SidebarPage label="Marketing" icon={IconPennant} page="/wiki/organization/marketing" />
</SidebarCategory>

<SidebarCategory name="World Generation" icon={IconBackhoe}>
  <SidebarPage label="Custom World Generation" icon={IconMountain} page="/wiki/worldgen/custom-worldgen"></SidebarPage>
  <SidebarPlaceholder label="Custom Structures" icon={IconBuildingCastle}></SidebarPlaceholder>
</SidebarCategory>
