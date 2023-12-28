/**
 * @typedef {import("@prismicio/client").Content.PageTitleSlice} PageTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PageTitleSlice>} PageTitleProps
 * @param {PageTitleProps}
 */
const PageTitle = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for page_title (variation: {slice.variation}) Slices
    </section>
  );
};

export default PageTitle;
