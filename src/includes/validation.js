// 將表單驗證系統獨立一個檔案
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    // 載入要使用的功能, components
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    // 載入要使用的表單驗證規則
    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alphaSpaces", alphaSpaces);
    defineRule("email", email);
    defineRule("minValue", minValue);
    defineRule("maxValue", maxValue);
    defineRule("passwordsMismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("countryExcluded", excluded);

    configure({
      // 自定義自己的錯誤訊息
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          min: `The field ${context.field} is too short.`,
          max: `The field ${context.field} is too long.`,
          alphaSpaces: `The field ${context.field} may only contain alphabetic characters and spaces.`,
          email: `The field ${context.field} must be a valid email.`,
          minValue: `The field ${context.field} is too low.`,
          maxValue: `The field ${context.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${context.field}`,
          countryExcluded: `Due to restrictions, we do not accept users from this location.`,
          passwordsMismatch: "The passwords don't match.",
          tos: "You must accrpt the Terms of Service.",
        };

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid.`;

        return message;
      },
      validateOnBlur: true, // 當用戶離開focus狀態時驗證
      validateOnChange: true, // 當用戶更改值時驗證
      validateOnInput: true, // 當用戶正在輸入時驗證
      validateOnModelUpdate: true, // 當使用v-model 並且更改時驗證
    });
  },
};
