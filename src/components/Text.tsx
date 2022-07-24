import React from 'react';

type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';

// type TextProps<C extends React.ElementType> = AsProps<C> & {
//   color?: Rainbow | 'black';
// };

// type Props<C extends React.ElementType> = React.PropsWithChildren<
//   TextProps<C>
// > &
//   Omit<React.ComponentPropsWithRef<C>, keyof TextProps<C>>;

type AsProps<C extends React.ElementType> = {
  as?: C;
};



type PropsWithAs<P,C extends React.ElementType> =P & AsProps<C>; 



type PropsToOmit<C extends React.ElementType, P> = keyof (AsProps<C> & P);



type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<PropsWithAs<Props, C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextProps = {
  color?: Rainbow | 'black';
};

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, TextProps>


type PolyMorphicRef<C extends React.ElementType>= React.ComponentPropsWithRef<C>['ref']

type PolymorphicComponentPropsWithRef <C extends React.ElementType, P> = PolymorphicComponentProps<C,P> & {ref?:PolyMorphicRef<C>}


type TextComponent = <C extends React.ElementType> (props: PolymorphicComponentPropsWithRef<C, TextProps>) => React.ReactElement | null

export const Text: TextComponent = React.forwardRef(<C extends React.ElementType = 'span'>({
    as,
    children,
    style,
    color,
    ...restProps
  }:Props<C, TextProps>, ref?:PolyMorphicRef<C>) => {
    const Component = as || 'span';
  
    const internalStyles = color ? { style: { ...style, color } } : {};
  
    return (
      <Component {...internalStyles} {...restProps} ref={ref}>
        {children}
      </Component>
    );
  }
)
