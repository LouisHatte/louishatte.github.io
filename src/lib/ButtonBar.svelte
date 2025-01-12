<script lang="ts">
  import chatBotSVG from "@/assets/icons/chat-bot.svg";
  import githubSVG from "@/assets/icons/github.svg";
  import linkedinSVG from "@/assets/icons/linkedin.svg";
  import sendSVG from "@/assets/icons/send.svg";

  import Button from "@/lib/Button.svelte";
</script>

<div>
  <Button><img src={chatBotSVG} width={40} height={40} alt="C" /></Button>
  <Button href="https://www.linkedin.com/in/louis-hatte-94160111b/">
    <img src={linkedinSVG} width={40} height={40} alt="L" />
  </Button>
  <Button href="https://github.com/LouisHatte">
    <img src={githubSVG} width={40} height={40} alt="G" />
  </Button>
  <Button><img src={sendSVG} width={40} height={40} alt="S" /></Button>
</div>

<style>
  div {
    width: 360px;
    display: flex;
    justify-content: space-around;
  }
</style>
