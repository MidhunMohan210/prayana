import Container from "./Container";

const spacingStyles = {
  compact: "py-section-sm",
  default: "py-section sm:py-section-md",
};

export default function Section({
  as: Tag = "section",
  spacing = "default",
  className = "",
  contentClassName = "",
  children,
  ...props
}) {
  return (
    <Tag className={`${spacingStyles[spacing]} ${className}`} {...props}>
      <Container className={contentClassName}>{children}</Container>
    </Tag>
  );
}
