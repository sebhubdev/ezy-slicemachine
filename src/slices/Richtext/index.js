/**
 * @typedef {import("@prismicio/client").Content.RichtextSlice} RichtextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichtextSlice>} RichtextProps
 * @param {RichtextProps}
 */
const Richtext = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for richtext (variation: {slice.variation}) Slices
    </section>
  );
};

export default Richtext;
