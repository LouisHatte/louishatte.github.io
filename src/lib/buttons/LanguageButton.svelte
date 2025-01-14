<script lang="ts">
  import { _, locale } from "svelte-i18n";
  import { get } from "svelte/store";

  import Button from "@/lib/buttons/Button.svelte";

  function switchLanguage() {
    const currentLocale = get(locale);
    if (!currentLocale) throw new Error("Current locale doesn't exist");
    const newLocale = currentLocale.startsWith("en") ? "fr" : "en";
    locale.set(newLocale);
  }
</script>

<Button onClick={switchLanguage}>{$_("lang")}</Button>
