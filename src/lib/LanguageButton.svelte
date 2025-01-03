<script lang="ts">
  import { _, locale } from "svelte-i18n";
  import { get } from "svelte/store";

  import Button from "@/lib/Button.svelte";

  function switchLanguage() {
    const currentLocale = get(locale);
    if (!currentLocale) throw new Error("Current locale doesn't exist");
    const newLocale = currentLocale.startsWith("en") ? "fr" : "en";
    locale.set(newLocale);
  }
</script>

<Button cb={switchLanguage}>{$_("lang")}</Button>
