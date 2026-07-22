export default function SectionHeading({
  as: Tag = "h2",
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      <Tag className="text-4xl sm:text-5xl lg:text-6xl">{title}</Tag>
      {description ? (
        <p className="mt-6 max-w-2xl text-base sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
