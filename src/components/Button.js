import { PrismicNextLink } from '@prismicio/next';
import { Text } from '@/components/Text';

export async function Button({
  linkField,
  textField,
  className,
  labelClassName,
}) {
  return (
    <PrismicNextLink
      field={linkField}
      className={`block rounded-full py-4 px-8  text-center uppercase custom-cursor shadow-sm ${className}`}
    >
      <Text field={textField} className={`custom-cursor ${labelClassName}`} />
    </PrismicNextLink>
  );
}
