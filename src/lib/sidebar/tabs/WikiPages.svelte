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
  import IconMicroscope from "~icons/tabler/microscope";
  import IconShoppingCart from "~icons/tabler/shopping-cart";
  import IconScoreboard from "~icons/tabler/Table";
  import IconPencil from "~icons/tabler/pencil";
  import IconConcepts from "~icons/tabler/blocks";
  import IconDialog from "~icons/tabler/category-2";
  import IconBackhoe from "~icons/tabler/backhoe";
  import IconMountain from "~icons/tabler/mountain";
  import IconBuildingCastle from "~icons/tabler/building-castle";
  import IconVocabulary from "~icons/tabler/vocabulary";
  import IconFileDescription from "~icons/tabler/file-description";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarCategory name="Info" icon={IconInfo}>
  <SidebarPage label="Free Multiplayer" icon={IconFileDescription} page="/wiki/info/free-multiplayer" />
  <SidebarPage label="Licenses" icon={IconFileDescription} page="/wiki/info/licenses" />
  <SidebarPage label="Neo/Forge Data Conditions" icon={IconFileDescription} page="/wiki/info/neoforge-data-conditions" />
  <!-- <SidebarPage label="Performance Mods" icon={IconFileDescription} page="/wiki/info/performance-mods" /> -->
  <SidebarPage label="Regex" icon={IconFileDescription} page="/wiki/info/regex" />
  <SidebarPage label="Useful Tags" icon={IconFileDescription} page="/wiki/info/useful-tags" />
  <SidebarPage label="Version Control" icon={IconFileDescription} page="/wiki/info/version-control-tools" />
</SidebarCategory>

<SidebarCategory name="Useful Terms" icon={IconConcepts}>
  <SidebarPage label="Closed Source" icon={IconVocabulary} page="/wiki/info/useful-terms/closed-source" />
  <SidebarPage label="Open Source" icon={IconVocabulary} page="/wiki/info/useful-terms/open-source" />
  <SidebarPage label="Visible Source" icon={IconVocabulary} page="/wiki/info/useful-terms/visible-source" />
  <SidebarPage label="Kitchen Sink" icon={IconVocabulary} page="/wiki/info/useful-terms/kitchen-sink" />
  <SidebarPage label="Tags" icon={IconVocabulary} page="/wiki/info/useful-terms/tags" />
  <SidebarPage label="Vanilla+" icon={IconVocabulary} page="/wiki/info/useful-terms/vanilla+" />
  <SidebarPage label="worldgen-feature" icon={IconVocabulary} page="/wiki/info/useful-terms/worldgen-feature" />
  <SidebarPage label="worldgen-structure" icon={IconVocabulary} page="/wiki/info/useful-terms/worldgen-structure" />
</SidebarCategory>

<SidebarCategory name="Planning" icon={IconPencil}>
  <SidebarPage label="Ideation" icon={IconPennant} page="/wiki/planning/ideation" />
  <SidebarPage label="Mod Selection" icon={IconShoppingCart} page="/wiki/planning/mod-selection" />
  <SidebarPage label="Useful Mods" icon={IconShoppingCart} page="/wiki/planning/useful-mods" />
  <SidebarPage label="Scope" icon={IconMicroscope} page="/wiki/planning/scope" />
</SidebarCategory>

<SidebarCategory name="Organization" icon={IconZip}>
  <SidebarPage label="Project Management" icon={IconPennant} page="/wiki/organization/project-management" />
  <SidebarPage label="Marketing" icon={IconPennant} page="/wiki/organization/marketing" />
</SidebarCategory>

<SidebarCategory name="World Generation" icon={IconBackhoe}>
  <SidebarPage label="Custom World Generation" icon={IconMountain} page="/wiki/worldgen/custom-worldgen"></SidebarPage>
  <SidebarPlaceholder label="Custom Structures" icon={IconBuildingCastle}></SidebarPlaceholder>
</SidebarCategory>
