<script lang="ts">
  // Page imports
  import SidebarPage from "$lib/sidebar/navigation/SidebarPage.svelte";
  import SidebarCategory from "$lib/sidebar/navigation/SidebarCategory.svelte";
  import SidebarHeading from "$lib/sidebar/navigation/SidebarHeading.svelte";

  // Icon imports
  // https://tabler-icons.io
  // import Icon<whatever name> from "~icons/tabler/<icon ID>"
  import IconHome from "~icons/tabler/home";
  import IconPennant from "~icons/tabler/pennant";
  import IconNew from "~icons/tabler/flask-2";
  import IconMusic from "~icons/tabler/music";
  import IconBug from "~icons/tabler/bug";
  import IconDownload from "~icons/tabler/download";
  import IconArrow from "~icons/tabler/arrow-down-left-circle";
  import IconBrackets from "~icons/tabler/code";
  import IconMouse from "~icons/tabler/mouse";
  import IconCarrot from "~icons/tabler/carrot";
  import IconEye from "~icons/tabler/eye";
  import IconApple from "~icons/tabler/apple";
  import IconSelection from "~icons/tabler/new-section";
  import IconDice from "~icons/tabler/dice-5";
  import IconID from "~icons/tabler/id-badge-2";
  import IconGrid from "~icons/tabler/grid-3x3";
  import IconItem from "~icons/tabler/icons";
  import IconServer from "~icons/tabler/server";
  import IconDifference from "~icons/tabler/layers-difference";
  import IconZip from "~icons/tabler/file-zip";
  import IconScoreboard from "~icons/tabler/table";
  import IconDivide from "~icons/tabler/divide";
  import IconList from "~icons/tabler/list";
  import IconPainting from "~icons/tabler/photo-plus";
  import IconDiamond from "~icons/tabler/diamond";
  import IconCoffee from "~icons/tabler/coffee";
  import IconVersus from "~icons/tabler/vs";
  import IconBuilding from "~icons/tabler/building-factory-2";
  import IconCottage from "~icons/tabler/building-cottage";
  import IconTrees from "~icons/tabler/trees";
  import IconPhotoPlus from "~icons/tabler/photo-plus";
  import IconBrandSpeedtest from "~icons/tabler/brand-speedtest";
  import IconRuler2 from "~icons/tabler/ruler-2";
  import IconMathMaxMin from "~icons/tabler/math-max-min";
  import IconCat from "~icons/tabler/cat";
  import SidebarPlaceholder from "../navigation/SidebarPlaceholder.svelte";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />
<!-- <SidebarPage label="Getting Started" icon={IconPennant} page="/guide/getting-started" /> -->

<!-- <SidebarCategory name="Adding new features" icon={IconNew}>
  <SidebarPage label="Jukebox Songs" icon={IconMusic} page="/guide/adding-new-features/jukebox-songs" />
  <SidebarPage label="Painting Variants" icon={IconPainting} page="/guide/adding-new-features/painting-variants" />
  <SidebarPage label="Smithing Trims" icon={IconDiamond} page="/guide/adding-new-features/smithing-trims" />
  <SidebarPage label="Mob Variants" icon={IconCat} page="/guide/adding-new-features/mob-variants" />

  <SidebarHeading label="Custom Items" />
  <SidebarPage label="Introduction" icon={IconItem} page="/guide/adding-new-features/custom-items/intro" />
  <SidebarPage label="Custom Item Recipes" icon={IconGrid} page="/guide/adding-new-features/custom-items/crafting" />
  <SidebarPage
    label="Custom Item Models and Textures"
    icon={IconPhotoPlus}
    page="/guide/adding-new-features/custom-items/models" />
</SidebarCategory> -->