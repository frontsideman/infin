import { PrismicNextLink } from '@prismicio/next';
import { Text } from '@/components/Text';

export async function Button({
  linkField,
  textField,
  className,
  labelClassName,
}) {
  return (
    <div
      className={`py-4 px-8 rounded-full text-center uppercase custom-cursor ${className}`}
    >
      <PrismicNextLink field={linkField}>
        <Text field={textField} className={labelClassName} />
      </PrismicNextLink>
    </div>
  );
}
