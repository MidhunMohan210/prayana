import Link from "next/link";

const variantStyles = {
  primary: "button-primary",
  secondary: "button-secondary",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const styles = `button-base ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
