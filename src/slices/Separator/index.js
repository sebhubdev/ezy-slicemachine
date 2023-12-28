/**
 * @typedef {import("@prismicio/client").Content.SeparatorSlice} SeparatorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SeparatorSlice>} SeparatorProps
 * @param {SeparatorProps}
 */
const Separator = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for separator (variation: {slice.variation}) Slices
    </section>
  );
};

export default Separator;
