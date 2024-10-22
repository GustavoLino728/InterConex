import { Controller } from "react-hook-form"
import { Row, Wrapper, SelectContainer, ErrorText, IconContainer, SelectInput, Options } from "./styles"

// eslint-disable-next-line react/prop-types
export const SelectAtoms = ({ leftIcon, rightIcon, nameLeft, nameRight, control, errorMessage, options, ...rest }) => {
  const defaultOption = { value: '', label: 'Selecione uma categoria' };

  return (
    <Row>
      <Wrapper>
        <SelectContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller
                name={nameLeft}
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <SelectInput {...field} {...rest}>
                        <Options value={defaultOption.value}>{defaultOption.label}</Options>
                        {options.map(option => (
                            <Options key={option.value} value={option.value}>
                                {option.label}
                            </Options>
                        ))}
                    </SelectInput>
                )}
            />
            {rightIcon ? (<IconContainer>{rightIcon}</IconContainer>) : null}
        </SelectContainer>

        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </Wrapper>

      <Wrapper>
        <SelectContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller
                name={nameRight}
                defaultValue=""
                control={control}
                render={({ field }) => (
                    <SelectInput {...field} {...rest}>
                        <Options value={defaultOption.value}>{defaultOption.label}</Options>
                        {options.map(option => (
                            <Options key={option.value} value={option.value}>
                                {option.label}
                            </Options>
                        ))}
                    </SelectInput>
                )}
            />
            {rightIcon ? (<IconContainer>{rightIcon}</IconContainer>) : null}
        </SelectContainer>
      </Wrapper>
    </Row>
  )
}