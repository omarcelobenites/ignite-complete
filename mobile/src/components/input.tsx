import { 
    Input as GluestackInput,
     InputField ,
      FormControl, 
      FormControlError,
      FormControlErrorText
    } from "@gluestack-ui/themed"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof  InputField> & {
    errorMessage?: string | null
    isInvalid?: boolean
    isReadOnly?: boolean
}


export function Input({isReadOnly = false ,errorMessage = null, isInvalid = false ,...rest }: Props){
    const invalid = !!errorMessage || isInvalid
    return(
        <FormControl isInvalid={invalid} mb="$4" w="$full">
            <GluestackInput 
            isInvalid = {invalid} 
            bg="$gray700" 
            h="$14" 
            px="$4" 
            borderWidth="$0" 
            borderRadius="$md"
            $focus={{
                borderWidth: 1,
                borderColor: invalid ? "$red500" : "$green500",
            }}
            $invalid={{
                borderWidth: 1,
                borderColor: "$red500",
            }}
            isReadOnly= {isReadOnly}
            opacity={isReadOnly ? 0.5 : 1}
            >
                <InputField
                    color="$white"
                    fontFamily="$body"
                    placeholderTextColor="$gray300"
                    {...rest}
                />    
            </GluestackInput>

            <FormControlError>
                <FormControlErrorText color="$red500">
                    {errorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}