<template>
  <div class="lecture-view">
    <TitleBlock
      module="Self introduction"
      title="Building your interview
    profile"
      subtitle="blah blah something something"
    >
      Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail
      salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine
      strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin
      short ribs. Short loin chuck salami pork chop fatback. Pork loin short
      loin pastrami short ribs frankfurter salami strip steak brisket leberkas
      sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon
      kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank
      filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip
      sirloin shankle pancetta venison spare ribs.
      <br />
      <br />
      Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky
      sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky
      shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef
      pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille
      venison porchetta, jowl chislic pork loin filet mignon short ribs rump
      sausage kielbasa ground round alcatra shank.
    </TitleBlock>

    <SectionParagraph title="Building your interview">
      Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail
      salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine
      strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin
      short ribs. Short loin chuck salami pork chop fatback. Pork loin short
      loin pastrami short ribs frankfurter salami strip steak brisket leberkas
      sirloin shoulder boudin pig.
      <br />
      <br />
      Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter
      swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen
      pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta
      venison spare ribs. Ball tip tri-tip tongue turkey, ham fatback tenderloin
      pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork
      frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail
      kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin
      swine. Andouille venison porchetta, jowl chislic pork loin filet mignon
      short ribs rump sausage kielbasa ground round alcatra shank.
    </SectionParagraph>

    <SectionExample title="Example!!!" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.lecture-view {
  padding: 20px 40px;

  overflow-y: scroll;
}
</style>

<script lang="ts">
import SectionExample from "@/components/SectionExample.vue";
import SectionParagraph from "@/components/SectionParagraph.vue";
import TitleBlock from "@/components/TitleBlock.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "LectureView",
  components: { TitleBlock, SectionParagraph, SectionExample },
});
</script>
