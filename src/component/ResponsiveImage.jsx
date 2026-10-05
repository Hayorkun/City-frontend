const ResponsiveImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
}) => {
  const createUrl = (width) => {
    return src.replace(
      `${src.match(/image\/upload/)[0]}/`,
      `image/upload/f_auto,q_auto,w_${width},c_fill/`
    );
  };

  const srcSet = `
    ${createUrl(480)} 480w,
    ${createUrl(820)} 820w,
    ${createUrl(1200)} 1200w
  `;

  return (
    <img
      src={createUrl(1200)}
      srcSet={srcSet}
      sizes="(max-width: 768px) 45vw, 40vw"
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      className={className}
    />
  );
};

export default ResponsiveImage;