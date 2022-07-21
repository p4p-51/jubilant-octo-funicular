// <template>
//   <div class="experience-selection">
//     <h5>Your relevant experiences:</h5>
//     <div
//       class="option"
//       v-for="experience in selected.experiences"
//       :key="experience"
//     >
//       <p>{{ experience }}</p>
//     </div>
//     <p>I want to talk about a different experience</p>
//   </div>
// </template>

// <style lang="scss" scoped>
// .experience-selection {
//   margin-top: 50px;

//   display: flex;
//   flex-direction: column;
//   row-gap: 10px;

//   align-self: flex-start;
//   width: 95%;
//   max-width: 800px;

//   h5 {
//     font-size: 14px;
//     font-weight: 400;

//     color: $c-black;

//     margin: 0;
//   }

//   .option {
//     border: solid 1px $c-grey-light;

//     font-size: 14px;

//     padding: 0 20px;

//     margin-right: 15px;

//     cursor: pointer;
//     transition: $animation;
//     &:hover {
//       border: solid 1px $c-primary;
//       margin-right: 0;
//       margin-left: 15px;
//     }
//   }

//   > p {
//     margin: 0;
//     font-size: 12px;

//     align-self: flex-end;

//     cursor: pointer;
//     transition: $animation;
//     &:hover {
//       color: $c-primary;
//       transform: scale(1.02);
//     }
//   }
// }
// </style>
