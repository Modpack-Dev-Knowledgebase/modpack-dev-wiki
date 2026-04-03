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
  import IconBook2 from "~icons/tabler/book-2";
  import IconInfo from "~icons/tabler/info-circle";
  import IconMountain from "~icons/tabler/mountain";
  import IconMountainOff from "~icons/tabler/mountain-off";
  import IconBackspace from "~icons/tabler/backspace";
  import SidebarPlaceholder from "../navigation/SidebarPlaceholder.svelte";
</script>

<!-- ADD PAGES AND CATEGORIES BELOW -->

<SidebarPage label="Home" icon={IconHome} page="/" />

<SidebarCategory name="Introductory" icon={IconInfo}>
  <SidebarPage label="Intro to Modpacks" icon={IconBook2} page="/guide/intro/intro-modpack" />
  <SidebarPage label="Minecraft Concepts" icon={IconBook2} page="/guide/intro/minecraft-concepts" />
  <SidebarPage label="Intro to Datapacks" icon={IconBook2} page="/guide/intro/intro-datapack" />
</SidebarCategory>

<SidebarCategory name="Worldgen" icon={IconMountain}>
  <SidebarPage label="Changing Mob Spawns" icon={IconMountain} page="/guide/worldgen/mob-spawns" />
  <SidebarPage label="Adding Features" icon={IconMountain} page="/guide/worldgen/modifying-features/adding-features" />
  <SidebarPage label="Removing Features" icon={IconMountainOff} page="/guide/worldgen/modifying-features/removing-features" />
  <SidebarPage label="Removing Blocks" icon={IconMountainOff} page="/guide/removing-content/removing-blocks" />
</SidebarCategory>

<SidebarCategory name="Items/Blocks" icon={IconList}>
  <SidebarPage label="Attribute Modification" icon={IconList} page="/guide/items-blocks/attribute-modification" />
  <SidebarPage label="Adding Items/Blocks" icon={IconList} page="/guide/items-blocks/adding-items-blocks" />
  <SidebarPage label="Removing Items" icon={IconBackspace} page="/guide/items-blocks/removing-items" />
  <SidebarPage label="Removing Blocks" icon={IconBackspace} page="/guide/items-blocks/removing-blocks" />
</SidebarCategory>

<SidebarCategory name="Advanced" icon={IconInfo}>
  <SidebarPage label="" icon={IconBook2} page="/guide/intro-datapack" />
  <SidebarPage label="" icon={IconBook2} page="/guide/intro-resourcepack" />
</SidebarCategory>