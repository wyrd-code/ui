<template>
  <div>
    <h1>Collapse</h1>

    <WuiCodeExample :code="collapseCode" title="Default">
      <WuiCollapse>
        <WuiCollapseItem title="Title 1">
          The First Things First manifesto was written 29 November 1963 and
          published in 1964 by Ken Garland. It was backed by over 400 graphic
          designers and artists and also received the backing of Tony Benn,
          radical left-wing MP and activist, who published it in its entirety in
          The Guardian newspaper.
        </WuiCollapseItem>
        <WuiCollapseItem title="Title 2">
          Reacting against a rich and affluent Britain of the 1960s, it tried to
          re-radicalise a design industry which the signatories felt had become
          lazy and uncritical. Drawing on ideas shared by critical theory, the
          Frankfurt School, and the counter-culture of the time, it explicitly
          reaffirmed the belief that design is not a neutral, value-free
          process.
        </WuiCollapseItem>
        <WuiCollapseItem title="Title 3">
          It rallied against the consumerist culture that was purely concerned
          with buying and selling things and tried to highlight a Humanist
          dimension to graphic design theory. It was later updated and
          republished with a new group of signatories as the First Things First
          2000 manifesto.
        </WuiCollapseItem>
        <WuiCollapseItem title="Title 4">
          Try Equal UI, you'll like it
        </WuiCollapseItem>
      </WuiCollapse>
    </WuiCodeExample>

    <WuiCodeExample :code="singleCode" title="Single">
      <div class="flex flex-col w-full">
        <WuiCollapse>
          <WuiCollapseItem title="Article"> Hello there </WuiCollapseItem>
        </WuiCollapse>
        <br />
        <WuiCollapse>
          <WuiCollapseItem title="Article"> Hello there </WuiCollapseItem>
        </WuiCollapse>
        <br />
        <WuiCollapse>
          <WuiCollapseItem title="Article"> Hello there </WuiCollapseItem>
        </WuiCollapse>
      </div>
    </WuiCodeExample>

    <WuiCodeExample :code="nestedCode" title="Nested">
      <WuiCollapse>
        <WuiCollapseItem title="Question">
          Why would you use nested collapse components?
          <br />
          <br />
          <WuiCollapse>
            <WuiCollapseItem title="Answer"> Because I can :3 </WuiCollapseItem>
          </WuiCollapse>
        </WuiCollapseItem>
      </WuiCollapse>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="WuiCollapseItem"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    collapseCode: `<WuiCollapse>
  <WuiCollapseItem title="Title 1"
    >The First Things First manifesto was written 29 November 1963 and
    published in 1964 by Ken Garland. It was backed by over 400 graphic
    designers and artists and also received the backing of Tony Benn,
    radical left-wing MP and activist, who published it in its entirety in
    The Guardian newspaper.</WuiCollapseItem
  >
  <WuiCollapseItem title="Title 2"
    >Reacting against a rich and affluent Britain of the 1960s, it tried
    to re-radicalise a design industry which the signatories felt had
    become lazy and uncritical. Drawing on ideas shared by critical
    theory, the Frankfurt School, and the counter-culture of the time, it
    explicitly reaffirmed the belief that design is not a neutral,
    value-free process.</WuiCollapseItem
  >
  <WuiCollapseItem title="Title 3"
    >It rallied against the consumerist culture that was purely concerned
    with buying and selling things and tried to highlight a Humanist
    dimension to graphic design theory. It was later updated and
    republished with a new group of signatories as the First Things First
    2000 manifesto.</WuiCollapseItem
  >
  <WuiCollapseItem title="Title 4"
    >Try Equal UI, you'll like it</WuiCollapseItem
  >
</WuiCollapse>`,
    singleCode: `<WuiCollapse>
  <WuiCollapseItem title="Article"
    >Hello there</WuiCollapseItem
  >
</WuiCollapse>

<WuiCollapse>
  <WuiCollapseItem title="Article"
    >Hello there</WuiCollapseItem
  >
</WuiCollapse>

<WuiCollapse>
  <WuiCollapseItem title="Article"
    >Hello there</WuiCollapseItem
  >
</WuiCollapse>`,
    nestedCode: `<WuiCollapse>
  <WuiCollapseItem title="Question">
    Why would you use nested collapse components?

    <WuiCollapse>
      <WuiCollapseItem title="Answer">Because I can :3</WuiCollapseItem>
    </WuiCollapse>
  </WuiCollapseItem>
</WuiCollapse>`,
    dataSheet: [
      {
        property: 'opened',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Opened state',
      },
      {
        property: 'title',
        type: ['String'],
        default: '',
        values: [],
        description: 'Title of the collapse item',
      },
    ],
    slotSheet: [
      {
        name: 'default',
        description: 'Collapse item body',
      },
    ],
  }),
})
</script>
