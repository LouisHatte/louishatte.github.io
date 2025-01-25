<script lang="ts">
  import Button, { type ButtonProps } from "@/lib/buttons/Button.svelte";

  type Props = ButtonProps & {
    download: string;
    href: string;
  };

  let { download, href, ...rest }: Props = $props();

  function downloadFile(fileUrl: string, fileName: string) {
    // const fileUrl = isConditionMet ? "/files/file1.pdf" : "/files/file2.pdf";
    // const fileName = isConditionMet ? "file1.pdf" : "file2.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
</script>

<Button onclick={() => downloadFile(href, download)} {...rest}></Button>
