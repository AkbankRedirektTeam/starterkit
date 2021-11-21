import * as React from "react"
import { Controller } from "react-hook-form"
import { TextField } from "@mui/material"

export const TextInput = (props: any) => {
  const { control, initialValue, name, rules, ...otherProps } = props
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={initialValue}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          {...otherProps}
          value={value}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
        />
      )}
    />
  )
}
