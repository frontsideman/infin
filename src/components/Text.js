import React from 'react';
import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicLink } from '@prismicio/react';
import Image from 'next/image';

export const Text = ({ field, className }) => {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: ({ children, key }) => (
          <h1 key={key} className={className}>
            {children}
          </h1>
        ),
        heading2: ({ children, key }) => (
          <h2 key={key} className={className}>
            {children}
          </h2>
        ),
        heading3: ({ children, key }) => (
          <h3 key={key} className={className}>
            {children}
          </h3>
        ),
        heading4: ({ children, key }) => (
          <h4 key={key} className={className}>
            {children}
          </h4>
        ),
        heading5: ({ children, key }) => (
          <h5 key={key} className={className}>
            {children}
          </h5>
        ),
        heading6: ({ children, key }) => (
          <h6 key={key} className={className}>
            {children}
          </h6>
        ),
        paragraph: ({ children, key }) => (
          <p key={key} className={className}>
            {children}
          </p>
        ),
        preformatted: ({ node, key }) => (
          <pre key={key} className={className}>
            {node.text}
          </pre>
        ),
        strong: ({ children, key }) => (
          <strong key={key} className={className}>
            {children}
          </strong>
        ),
        em: ({ children, key }) => (
          <em key={key} className={className}>
            {children}
          </em>
        ),
        listItem: ({ children, key }) => (
          <li key={key} className={className}>
            {children}
          </li>
        ),
        oListItem: ({ children, key }) => (
          <li key={key} className={className}>
            {children}
          </li>
        ),
        list: ({ children, key }) => (
          <ul key={key} className={className}>
            {children}
          </ul>
        ),
        oList: ({ children, key }) => (
          <ol key={key} className={className}>
            {children}
          </ol>
        ),
        image: ({ node, key }) => {
          const img = (
            <Image
              src={node.url}
              alt={node.alt ?? undefined}
              data-copyright={node.copyright ? node.copyright : undefined}
              className={className}
            />
          );

          return (
            <p key={key} className="block-img">
              {node.linkTo ? (
                <PrismicLink
                  linkResolver={args.linkResolver}
                  internalComponent={args.internalLinkComponent}
                  externalComponent={args.externalLinkComponent}
                  field={node.linkTo}
                >
                  {img}
                </PrismicLink>
              ) : (
                img
              )}
            </p>
          );
        },
        embed: ({ node, key }) => (
          <div
            key={key}
            data-oembed={node.oembed.embed_url}
            data-oembed-type={node.oembed.type}
            data-oembed-provider={node.oembed.provider_name}
            dangerouslySetInnerHTML={{ __html: node.oembed.html ?? '' }}
            className={className}
          />
        ),
        hyperlink: ({ node, children, key }) => (
          <PrismicLink
            key={key}
            field={node.data}
            linkResolver={args.linkResolver}
            internalComponent={args.internalLinkComponent}
            externalComponent={args.externalLinkComponent}
            className={className}
          >
            {children}
          </PrismicLink>
        ),
        label: ({ node, children, key }) => (
          <span key={key} className={node.data.label}>
            {children}
          </span>
        ),
        span: ({ text, key }) => {
          const result = [];

          let i = 0;
          for (const line of text.split('\n')) {
            if (i > 0) {
              result.push(<br key={`${i}__break`} />);
            }
            result.push(
              <React.Fragment key={`${i}__line`}>{line}</React.Fragment>
            );
            i++;
          }

          return <React.Fragment key={key}>{result}</React.Fragment>;
        },
      }}
      fallback={<p>No content</p>}
    />
  );
};
