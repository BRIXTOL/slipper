/* eslint-disable */
import { Fugazi } from "@brixtol/mcss";

/**
 * CSS Class Selectors 
 * 
 * Last Modified: 2021-09-30T22:16:50.844Z
 */
declare type Selectors = Array<
  | "container"
  | "container-fluid"
  | "row"
  | "col"
  | "col-auto"
  | "col-2"
  | "col-3"
  | "col-4"
  | "col-8"
  | "col-9"
  | "col-11"
  | "col-12"
  | "g-0"
  | "gx-0"
  | "g-1"
  | "gy-3"
  | "col-sm-11"
  | "col-lg-6"
  | "print__button"
  | "icon"
  | "how-it-works"
  | "print"
  | "jc-center"
  | "jc-between"
  | "ai-center"
  | "ac-center"
  | "as-center"
  | "mt-1"
  | "mt-3"
  | "mt-4"
  | "mr-auto"
  | "mb-0"
  | "mb-3"
  | "px-3"
  | "py-2"
  | "py-3"
  | "py-4"
  | "pt-4"
  | "pr-1"
  | "pr-2"
  | "pb-1"
  | "pb-2"
  | "pb-3"
  | "pl-0"
  | "pl-2"
  | "text-right"
  | "text-center"
  | "return-logo"
  | "bd-bottom"
  | "promo-sm"
  | "promo-disclaim"
  | "d-block"
  | "return"
  | "sender__name"
  | "sender__address"
  | "internal"
  | "internal__item"
  | "internal__seperator"
  | "checkbox"
  | "hero"
  | "hero__logo"
  | "hero__caption"
  | "version"
  | "find"
  | "channels__github"
  | "channels__brixtol"
  | "container-sm"
  | "container-md"
  | "container-lg"
  | "container-xl"
  | "container-xxl"
  | "row-cols-auto"
  | "row-cols-1"
  | "row-cols-2"
  | "row-cols-3"
  | "row-cols-4"
  | "row-cols-5"
  | "row-cols-6"
  | "col-1"
  | "col-5"
  | "col-6"
  | "col-7"
  | "col-10"
  | "offset-1"
  | "offset-2"
  | "offset-3"
  | "offset-4"
  | "offset-5"
  | "offset-6"
  | "offset-7"
  | "offset-8"
  | "offset-9"
  | "offset-10"
  | "offset-11"
  | "gy-0"
  | "gx-1"
  | "gy-1"
  | "g-2"
  | "gx-2"
  | "gy-2"
  | "g-3"
  | "gx-3"
  | "g-4"
  | "gx-4"
  | "gy-4"
  | "g-5"
  | "gx-5"
  | "gy-5"
  | "col-sm"
  | "row-cols-sm-auto"
  | "row-cols-sm-1"
  | "row-cols-sm-2"
  | "row-cols-sm-3"
  | "row-cols-sm-4"
  | "row-cols-sm-5"
  | "row-cols-sm-6"
  | "col-sm-auto"
  | "col-sm-1"
  | "col-sm-2"
  | "col-sm-3"
  | "col-sm-4"
  | "col-sm-5"
  | "col-sm-6"
  | "col-sm-7"
  | "col-sm-8"
  | "col-sm-9"
  | "col-sm-10"
  | "col-sm-12"
  | "offset-sm-0"
  | "offset-sm-1"
  | "offset-sm-2"
  | "offset-sm-3"
  | "offset-sm-4"
  | "offset-sm-5"
  | "offset-sm-6"
  | "offset-sm-7"
  | "offset-sm-8"
  | "offset-sm-9"
  | "offset-sm-10"
  | "offset-sm-11"
  | "g-sm-0"
  | "gx-sm-0"
  | "gy-sm-0"
  | "g-sm-1"
  | "gx-sm-1"
  | "gy-sm-1"
  | "g-sm-2"
  | "gx-sm-2"
  | "gy-sm-2"
  | "g-sm-3"
  | "gx-sm-3"
  | "gy-sm-3"
  | "g-sm-4"
  | "gx-sm-4"
  | "gy-sm-4"
  | "g-sm-5"
  | "gx-sm-5"
  | "gy-sm-5"
  | "col-md"
  | "row-cols-md-auto"
  | "row-cols-md-1"
  | "row-cols-md-2"
  | "row-cols-md-3"
  | "row-cols-md-4"
  | "row-cols-md-5"
  | "row-cols-md-6"
  | "col-md-auto"
  | "col-md-1"
  | "col-md-2"
  | "col-md-3"
  | "col-md-4"
  | "col-md-5"
  | "col-md-6"
  | "col-md-7"
  | "col-md-8"
  | "col-md-9"
  | "col-md-10"
  | "col-md-11"
  | "col-md-12"
  | "offset-md-0"
  | "offset-md-1"
  | "offset-md-2"
  | "offset-md-3"
  | "offset-md-4"
  | "offset-md-5"
  | "offset-md-6"
  | "offset-md-7"
  | "offset-md-8"
  | "offset-md-9"
  | "offset-md-10"
  | "offset-md-11"
  | "g-md-0"
  | "gx-md-0"
  | "gy-md-0"
  | "g-md-1"
  | "gx-md-1"
  | "gy-md-1"
  | "g-md-2"
  | "gx-md-2"
  | "gy-md-2"
  | "g-md-3"
  | "gx-md-3"
  | "gy-md-3"
  | "g-md-4"
  | "gx-md-4"
  | "gy-md-4"
  | "g-md-5"
  | "gx-md-5"
  | "gy-md-5"
  | "col-lg"
  | "row-cols-lg-auto"
  | "row-cols-lg-1"
  | "row-cols-lg-2"
  | "row-cols-lg-3"
  | "row-cols-lg-4"
  | "row-cols-lg-5"
  | "row-cols-lg-6"
  | "col-lg-auto"
  | "col-lg-1"
  | "col-lg-2"
  | "col-lg-3"
  | "col-lg-4"
  | "col-lg-5"
  | "col-lg-7"
  | "col-lg-8"
  | "col-lg-9"
  | "col-lg-10"
  | "col-lg-11"
  | "col-lg-12"
  | "offset-lg-0"
  | "offset-lg-1"
  | "offset-lg-2"
  | "offset-lg-3"
  | "offset-lg-4"
  | "offset-lg-5"
  | "offset-lg-6"
  | "offset-lg-7"
  | "offset-lg-8"
  | "offset-lg-9"
  | "offset-lg-10"
  | "offset-lg-11"
  | "g-lg-0"
  | "gx-lg-0"
  | "gy-lg-0"
  | "g-lg-1"
  | "gx-lg-1"
  | "gy-lg-1"
  | "g-lg-2"
  | "gx-lg-2"
  | "gy-lg-2"
  | "g-lg-3"
  | "gx-lg-3"
  | "gy-lg-3"
  | "g-lg-4"
  | "gx-lg-4"
  | "gy-lg-4"
  | "g-lg-5"
  | "gx-lg-5"
  | "gy-lg-5"
  | "col-xl"
  | "row-cols-xl-auto"
  | "row-cols-xl-1"
  | "row-cols-xl-2"
  | "row-cols-xl-3"
  | "row-cols-xl-4"
  | "row-cols-xl-5"
  | "row-cols-xl-6"
  | "col-xl-auto"
  | "col-xl-1"
  | "col-xl-2"
  | "col-xl-3"
  | "col-xl-4"
  | "col-xl-5"
  | "col-xl-6"
  | "col-xl-7"
  | "col-xl-8"
  | "col-xl-9"
  | "col-xl-10"
  | "col-xl-11"
  | "col-xl-12"
  | "offset-xl-0"
  | "offset-xl-1"
  | "offset-xl-2"
  | "offset-xl-3"
  | "offset-xl-4"
  | "offset-xl-5"
  | "offset-xl-6"
  | "offset-xl-7"
  | "offset-xl-8"
  | "offset-xl-9"
  | "offset-xl-10"
  | "offset-xl-11"
  | "g-xl-0"
  | "gx-xl-0"
  | "gy-xl-0"
  | "g-xl-1"
  | "gx-xl-1"
  | "gy-xl-1"
  | "g-xl-2"
  | "gx-xl-2"
  | "gy-xl-2"
  | "g-xl-3"
  | "gx-xl-3"
  | "gy-xl-3"
  | "g-xl-4"
  | "gx-xl-4"
  | "gy-xl-4"
  | "g-xl-5"
  | "gx-xl-5"
  | "gy-xl-5"
  | "col-xxl"
  | "row-cols-xxl-auto"
  | "row-cols-xxl-1"
  | "row-cols-xxl-2"
  | "row-cols-xxl-3"
  | "row-cols-xxl-4"
  | "row-cols-xxl-5"
  | "row-cols-xxl-6"
  | "col-xxl-auto"
  | "col-xxl-1"
  | "col-xxl-2"
  | "col-xxl-3"
  | "col-xxl-4"
  | "col-xxl-5"
  | "col-xxl-6"
  | "col-xxl-7"
  | "col-xxl-8"
  | "col-xxl-9"
  | "col-xxl-10"
  | "col-xxl-11"
  | "col-xxl-12"
  | "offset-xxl-0"
  | "offset-xxl-1"
  | "offset-xxl-2"
  | "offset-xxl-3"
  | "offset-xxl-4"
  | "offset-xxl-5"
  | "offset-xxl-6"
  | "offset-xxl-7"
  | "offset-xxl-8"
  | "offset-xxl-9"
  | "offset-xxl-10"
  | "offset-xxl-11"
  | "g-xxl-0"
  | "gx-xxl-0"
  | "gy-xxl-0"
  | "g-xxl-1"
  | "gx-xxl-1"
  | "gy-xxl-1"
  | "g-xxl-2"
  | "gx-xxl-2"
  | "gy-xxl-2"
  | "g-xxl-3"
  | "gx-xxl-3"
  | "gy-xxl-3"
  | "g-xxl-4"
  | "gx-xxl-4"
  | "gy-xxl-4"
  | "g-xxl-5"
  | "gx-xxl-5"
  | "gy-xxl-5"
  | "jc-start"
  | "jc-end"
  | "jc-around"
  | "jc-even"
  | "ai-start"
  | "ai-end"
  | "ai-base"
  | "ai-stretch"
  | "ac-start"
  | "ac-end"
  | "ac-between"
  | "ac-around"
  | "ac-stretch"
  | "as-auto"
  | "as-start"
  | "as-end"
  | "as-base"
  | "as-stretch"
  | "order-first"
  | "order-0"
  | "order-1"
  | "order-2"
  | "order-3"
  | "order-4"
  | "order-5"
  | "order-last"
  | "m-0"
  | "m-1"
  | "m-2"
  | "m-3"
  | "m-4"
  | "m-5"
  | "m-auto"
  | "mx-0"
  | "mx-1"
  | "mx-2"
  | "mx-3"
  | "mx-4"
  | "mx-5"
  | "mx-auto"
  | "my-0"
  | "my-1"
  | "my-2"
  | "my-3"
  | "my-4"
  | "my-5"
  | "my-auto"
  | "mt-0"
  | "mt-2"
  | "mt-5"
  | "mt-auto"
  | "mr-0"
  | "mr-1"
  | "mr-2"
  | "mr-3"
  | "mr-4"
  | "mr-5"
  | "mb-1"
  | "mb-2"
  | "mb-4"
  | "mb-5"
  | "mb-auto"
  | "ml-0"
  | "ml-1"
  | "ml-2"
  | "ml-3"
  | "ml-4"
  | "ml-5"
  | "ml-auto"
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "px-0"
  | "px-1"
  | "px-2"
  | "px-4"
  | "px-5"
  | "py-0"
  | "py-1"
  | "py-5"
  | "pt-0"
  | "pt-1"
  | "pt-2"
  | "pt-3"
  | "pt-5"
  | "pr-0"
  | "pr-3"
  | "pr-4"
  | "pr-5"
  | "pb-0"
  | "pb-4"
  | "pb-5"
  | "pl-1"
  | "pl-3"
  | "pl-4"
  | "pl-5"
  | "text-left"
  | "jc-sm-start"
  | "jc-sm-end"
  | "jc-sm-center"
  | "jc-sm-between"
  | "jc-sm-around"
  | "jc-sm-even"
  | "ai-sm-start"
  | "ai-sm-end"
  | "ai-sm-center"
  | "ai-sm-base"
  | "ai-sm-stretch"
  | "ac-sm-start"
  | "ac-sm-end"
  | "ac-sm-center"
  | "ac-sm-between"
  | "ac-sm-around"
  | "ac-sm-stretch"
  | "as-sm-auto"
  | "as-sm-start"
  | "as-sm-end"
  | "as-sm-center"
  | "as-sm-base"
  | "as-sm-stretch"
  | "order-sm-first"
  | "order-sm-0"
  | "order-sm-1"
  | "order-sm-2"
  | "order-sm-3"
  | "order-sm-4"
  | "order-sm-5"
  | "order-sm-last"
  | "m-sm-0"
  | "m-sm-1"
  | "m-sm-2"
  | "m-sm-3"
  | "m-sm-4"
  | "m-sm-5"
  | "m-sm-auto"
  | "mx-sm-0"
  | "mx-sm-1"
  | "mx-sm-2"
  | "mx-sm-3"
  | "mx-sm-4"
  | "mx-sm-5"
  | "mx-sm-auto"
  | "my-sm-0"
  | "my-sm-1"
  | "my-sm-2"
  | "my-sm-3"
  | "my-sm-4"
  | "my-sm-5"
  | "my-sm-auto"
  | "mt-sm-0"
  | "mt-sm-1"
  | "mt-sm-2"
  | "mt-sm-3"
  | "mt-sm-4"
  | "mt-sm-5"
  | "mt-sm-auto"
  | "mr-sm-0"
  | "mr-sm-1"
  | "mr-sm-2"
  | "mr-sm-3"
  | "mr-sm-4"
  | "mr-sm-5"
  | "mr-sm-auto"
  | "mb-sm-0"
  | "mb-sm-1"
  | "mb-sm-2"
  | "mb-sm-3"
  | "mb-sm-4"
  | "mb-sm-5"
  | "mb-sm-auto"
  | "ml-sm-0"
  | "ml-sm-1"
  | "ml-sm-2"
  | "ml-sm-3"
  | "ml-sm-4"
  | "ml-sm-5"
  | "ml-sm-auto"
  | "p-sm-0"
  | "p-sm-1"
  | "p-sm-2"
  | "p-sm-3"
  | "p-sm-4"
  | "p-sm-5"
  | "px-sm-0"
  | "px-sm-1"
  | "px-sm-2"
  | "px-sm-3"
  | "px-sm-4"
  | "px-sm-5"
  | "py-sm-0"
  | "py-sm-1"
  | "py-sm-2"
  | "py-sm-3"
  | "py-sm-4"
  | "py-sm-5"
  | "pt-sm-0"
  | "pt-sm-1"
  | "pt-sm-2"
  | "pt-sm-3"
  | "pt-sm-4"
  | "pt-sm-5"
  | "pr-sm-0"
  | "pr-sm-1"
  | "pr-sm-2"
  | "pr-sm-3"
  | "pr-sm-4"
  | "pr-sm-5"
  | "pb-sm-0"
  | "pb-sm-1"
  | "pb-sm-2"
  | "pb-sm-3"
  | "pb-sm-4"
  | "pb-sm-5"
  | "pl-sm-0"
  | "pl-sm-1"
  | "pl-sm-2"
  | "pl-sm-3"
  | "pl-sm-4"
  | "pl-sm-5"
  | "text-sm-left"
  | "text-sm-right"
  | "text-sm-center"
  | "jc-md-start"
  | "jc-md-end"
  | "jc-md-center"
  | "jc-md-between"
  | "jc-md-around"
  | "jc-md-even"
  | "ai-md-start"
  | "ai-md-end"
  | "ai-md-center"
  | "ai-md-base"
  | "ai-md-stretch"
  | "ac-md-start"
  | "ac-md-end"
  | "ac-md-center"
  | "ac-md-between"
  | "ac-md-around"
  | "ac-md-stretch"
  | "as-md-auto"
  | "as-md-start"
  | "as-md-end"
  | "as-md-center"
  | "as-md-base"
  | "as-md-stretch"
  | "order-md-first"
  | "order-md-0"
  | "order-md-1"
  | "order-md-2"
  | "order-md-3"
  | "order-md-4"
  | "order-md-5"
  | "order-md-last"
  | "m-md-0"
  | "m-md-1"
  | "m-md-2"
  | "m-md-3"
  | "m-md-4"
  | "m-md-5"
  | "m-md-auto"
  | "mx-md-0"
  | "mx-md-1"
  | "mx-md-2"
  | "mx-md-3"
  | "mx-md-4"
  | "mx-md-5"
  | "mx-md-auto"
  | "my-md-0"
  | "my-md-1"
  | "my-md-2"
  | "my-md-3"
  | "my-md-4"
  | "my-md-5"
  | "my-md-auto"
  | "mt-md-0"
  | "mt-md-1"
  | "mt-md-2"
  | "mt-md-3"
  | "mt-md-4"
  | "mt-md-5"
  | "mt-md-auto"
  | "mr-md-0"
  | "mr-md-1"
  | "mr-md-2"
  | "mr-md-3"
  | "mr-md-4"
  | "mr-md-5"
  | "mr-md-auto"
  | "mb-md-0"
  | "mb-md-1"
  | "mb-md-2"
  | "mb-md-3"
  | "mb-md-4"
  | "mb-md-5"
  | "mb-md-auto"
  | "ml-md-0"
  | "ml-md-1"
  | "ml-md-2"
  | "ml-md-3"
  | "ml-md-4"
  | "ml-md-5"
  | "ml-md-auto"
  | "p-md-0"
  | "p-md-1"
  | "p-md-2"
  | "p-md-3"
  | "p-md-4"
  | "p-md-5"
  | "px-md-0"
  | "px-md-1"
  | "px-md-2"
  | "px-md-3"
  | "px-md-4"
  | "px-md-5"
  | "py-md-0"
  | "py-md-1"
  | "py-md-2"
  | "py-md-3"
  | "py-md-4"
  | "py-md-5"
  | "pt-md-0"
  | "pt-md-1"
  | "pt-md-2"
  | "pt-md-3"
  | "pt-md-4"
  | "pt-md-5"
  | "pr-md-0"
  | "pr-md-1"
  | "pr-md-2"
  | "pr-md-3"
  | "pr-md-4"
  | "pr-md-5"
  | "pb-md-0"
  | "pb-md-1"
  | "pb-md-2"
  | "pb-md-3"
  | "pb-md-4"
  | "pb-md-5"
  | "pl-md-0"
  | "pl-md-1"
  | "pl-md-2"
  | "pl-md-3"
  | "pl-md-4"
  | "pl-md-5"
  | "text-md-left"
  | "text-md-right"
  | "text-md-center"
  | "jc-lg-start"
  | "jc-lg-end"
  | "jc-lg-center"
  | "jc-lg-between"
  | "jc-lg-around"
  | "jc-lg-even"
  | "ai-lg-start"
  | "ai-lg-end"
  | "ai-lg-center"
  | "ai-lg-base"
  | "ai-lg-stretch"
  | "ac-lg-start"
  | "ac-lg-end"
  | "ac-lg-center"
  | "ac-lg-between"
  | "ac-lg-around"
  | "ac-lg-stretch"
  | "as-lg-auto"
  | "as-lg-start"
  | "as-lg-end"
  | "as-lg-center"
  | "as-lg-base"
  | "as-lg-stretch"
  | "order-lg-first"
  | "order-lg-0"
  | "order-lg-1"
  | "order-lg-2"
  | "order-lg-3"
  | "order-lg-4"
  | "order-lg-5"
  | "order-lg-last"
  | "m-lg-0"
  | "m-lg-1"
  | "m-lg-2"
  | "m-lg-3"
  | "m-lg-4"
  | "m-lg-5"
  | "m-lg-auto"
  | "mx-lg-0"
  | "mx-lg-1"
  | "mx-lg-2"
  | "mx-lg-3"
  | "mx-lg-4"
  | "mx-lg-5"
  | "mx-lg-auto"
  | "my-lg-0"
  | "my-lg-1"
  | "my-lg-2"
  | "my-lg-3"
  | "my-lg-4"
  | "my-lg-5"
  | "my-lg-auto"
  | "mt-lg-0"
  | "mt-lg-1"
  | "mt-lg-2"
  | "mt-lg-3"
  | "mt-lg-4"
  | "mt-lg-5"
  | "mt-lg-auto"
  | "mr-lg-0"
  | "mr-lg-1"
  | "mr-lg-2"
  | "mr-lg-3"
  | "mr-lg-4"
  | "mr-lg-5"
  | "mr-lg-auto"
  | "mb-lg-0"
  | "mb-lg-1"
  | "mb-lg-2"
  | "mb-lg-3"
  | "mb-lg-4"
  | "mb-lg-5"
  | "mb-lg-auto"
  | "ml-lg-0"
  | "ml-lg-1"
  | "ml-lg-2"
  | "ml-lg-3"
  | "ml-lg-4"
  | "ml-lg-5"
  | "ml-lg-auto"
  | "p-lg-0"
  | "p-lg-1"
  | "p-lg-2"
  | "p-lg-3"
  | "p-lg-4"
  | "p-lg-5"
  | "px-lg-0"
  | "px-lg-1"
  | "px-lg-2"
  | "px-lg-3"
  | "px-lg-4"
  | "px-lg-5"
  | "py-lg-0"
  | "py-lg-1"
  | "py-lg-2"
  | "py-lg-3"
  | "py-lg-4"
  | "py-lg-5"
  | "pt-lg-0"
  | "pt-lg-1"
  | "pt-lg-2"
  | "pt-lg-3"
  | "pt-lg-4"
  | "pt-lg-5"
  | "pr-lg-0"
  | "pr-lg-1"
  | "pr-lg-2"
  | "pr-lg-3"
  | "pr-lg-4"
  | "pr-lg-5"
  | "pb-lg-0"
  | "pb-lg-1"
  | "pb-lg-2"
  | "pb-lg-3"
  | "pb-lg-4"
  | "pb-lg-5"
  | "pl-lg-0"
  | "pl-lg-1"
  | "pl-lg-2"
  | "pl-lg-3"
  | "pl-lg-4"
  | "pl-lg-5"
  | "text-lg-left"
  | "text-lg-right"
  | "text-lg-center"
  | "jc-xl-start"
  | "jc-xl-end"
  | "jc-xl-center"
  | "jc-xl-between"
  | "jc-xl-around"
  | "jc-xl-even"
  | "ai-xl-start"
  | "ai-xl-end"
  | "ai-xl-center"
  | "ai-xl-base"
  | "ai-xl-stretch"
  | "ac-xl-start"
  | "ac-xl-end"
  | "ac-xl-center"
  | "ac-xl-between"
  | "ac-xl-around"
  | "ac-xl-stretch"
  | "as-xl-auto"
  | "as-xl-start"
  | "as-xl-end"
  | "as-xl-center"
  | "as-xl-base"
  | "as-xl-stretch"
  | "order-xl-first"
  | "order-xl-0"
  | "order-xl-1"
  | "order-xl-2"
  | "order-xl-3"
  | "order-xl-4"
  | "order-xl-5"
  | "order-xl-last"
  | "m-xl-0"
  | "m-xl-1"
  | "m-xl-2"
  | "m-xl-3"
  | "m-xl-4"
  | "m-xl-5"
  | "m-xl-auto"
  | "mx-xl-0"
  | "mx-xl-1"
  | "mx-xl-2"
  | "mx-xl-3"
  | "mx-xl-4"
  | "mx-xl-5"
  | "mx-xl-auto"
  | "my-xl-0"
  | "my-xl-1"
  | "my-xl-2"
  | "my-xl-3"
  | "my-xl-4"
  | "my-xl-5"
  | "my-xl-auto"
  | "mt-xl-0"
  | "mt-xl-1"
  | "mt-xl-2"
  | "mt-xl-3"
  | "mt-xl-4"
  | "mt-xl-5"
  | "mt-xl-auto"
  | "mr-xl-0"
  | "mr-xl-1"
  | "mr-xl-2"
  | "mr-xl-3"
  | "mr-xl-4"
  | "mr-xl-5"
  | "mr-xl-auto"
  | "mb-xl-0"
  | "mb-xl-1"
  | "mb-xl-2"
  | "mb-xl-3"
  | "mb-xl-4"
  | "mb-xl-5"
  | "mb-xl-auto"
  | "ml-xl-0"
  | "ml-xl-1"
  | "ml-xl-2"
  | "ml-xl-3"
  | "ml-xl-4"
  | "ml-xl-5"
  | "ml-xl-auto"
  | "p-xl-0"
  | "p-xl-1"
  | "p-xl-2"
  | "p-xl-3"
  | "p-xl-4"
  | "p-xl-5"
  | "px-xl-0"
  | "px-xl-1"
  | "px-xl-2"
  | "px-xl-3"
  | "px-xl-4"
  | "px-xl-5"
  | "py-xl-0"
  | "py-xl-1"
  | "py-xl-2"
  | "py-xl-3"
  | "py-xl-4"
  | "py-xl-5"
  | "pt-xl-0"
  | "pt-xl-1"
  | "pt-xl-2"
  | "pt-xl-3"
  | "pt-xl-4"
  | "pt-xl-5"
  | "pr-xl-0"
  | "pr-xl-1"
  | "pr-xl-2"
  | "pr-xl-3"
  | "pr-xl-4"
  | "pr-xl-5"
  | "pb-xl-0"
  | "pb-xl-1"
  | "pb-xl-2"
  | "pb-xl-3"
  | "pb-xl-4"
  | "pb-xl-5"
  | "pl-xl-0"
  | "pl-xl-1"
  | "pl-xl-2"
  | "pl-xl-3"
  | "pl-xl-4"
  | "pl-xl-5"
  | "text-xl-left"
  | "text-xl-right"
  | "text-xl-center"
  | "jc-xxl-start"
  | "jc-xxl-end"
  | "jc-xxl-center"
  | "jc-xxl-between"
  | "jc-xxl-around"
  | "jc-xxl-even"
  | "ai-xxl-start"
  | "ai-xxl-end"
  | "ai-xxl-center"
  | "ai-xxl-base"
  | "ai-xxl-stretch"
  | "ac-xxl-start"
  | "ac-xxl-end"
  | "ac-xxl-center"
  | "ac-xxl-between"
  | "ac-xxl-around"
  | "ac-xxl-stretch"
  | "as-xxl-auto"
  | "as-xxl-start"
  | "as-xxl-end"
  | "as-xxl-center"
  | "as-xxl-base"
  | "as-xxl-stretch"
  | "order-xxl-first"
  | "order-xxl-0"
  | "order-xxl-1"
  | "order-xxl-2"
  | "order-xxl-3"
  | "order-xxl-4"
  | "order-xxl-5"
  | "order-xxl-last"
  | "m-xxl-0"
  | "m-xxl-1"
  | "m-xxl-2"
  | "m-xxl-3"
  | "m-xxl-4"
  | "m-xxl-5"
  | "m-xxl-auto"
  | "mx-xxl-0"
  | "mx-xxl-1"
  | "mx-xxl-2"
  | "mx-xxl-3"
  | "mx-xxl-4"
  | "mx-xxl-5"
  | "mx-xxl-auto"
  | "my-xxl-0"
  | "my-xxl-1"
  | "my-xxl-2"
  | "my-xxl-3"
  | "my-xxl-4"
  | "my-xxl-5"
  | "my-xxl-auto"
  | "mt-xxl-0"
  | "mt-xxl-1"
  | "mt-xxl-2"
  | "mt-xxl-3"
  | "mt-xxl-4"
  | "mt-xxl-5"
  | "mt-xxl-auto"
  | "mr-xxl-0"
  | "mr-xxl-1"
  | "mr-xxl-2"
  | "mr-xxl-3"
  | "mr-xxl-4"
  | "mr-xxl-5"
  | "mr-xxl-auto"
  | "mb-xxl-0"
  | "mb-xxl-1"
  | "mb-xxl-2"
  | "mb-xxl-3"
  | "mb-xxl-4"
  | "mb-xxl-5"
  | "mb-xxl-auto"
  | "ml-xxl-0"
  | "ml-xxl-1"
  | "ml-xxl-2"
  | "ml-xxl-3"
  | "ml-xxl-4"
  | "ml-xxl-5"
  | "ml-xxl-auto"
  | "p-xxl-0"
  | "p-xxl-1"
  | "p-xxl-2"
  | "p-xxl-3"
  | "p-xxl-4"
  | "p-xxl-5"
  | "px-xxl-0"
  | "px-xxl-1"
  | "px-xxl-2"
  | "px-xxl-3"
  | "px-xxl-4"
  | "px-xxl-5"
  | "py-xxl-0"
  | "py-xxl-1"
  | "py-xxl-2"
  | "py-xxl-3"
  | "py-xxl-4"
  | "py-xxl-5"
  | "pt-xxl-0"
  | "pt-xxl-1"
  | "pt-xxl-2"
  | "pt-xxl-3"
  | "pt-xxl-4"
  | "pt-xxl-5"
  | "pr-xxl-0"
  | "pr-xxl-1"
  | "pr-xxl-2"
  | "pr-xxl-3"
  | "pr-xxl-4"
  | "pr-xxl-5"
  | "pb-xxl-0"
  | "pb-xxl-1"
  | "pb-xxl-2"
  | "pb-xxl-3"
  | "pb-xxl-4"
  | "pb-xxl-5"
  | "pl-xxl-0"
  | "pl-xxl-1"
  | "pl-xxl-2"
  | "pl-xxl-3"
  | "pl-xxl-4"
  | "pl-xxl-5"
  | "text-xxl-left"
  | "text-xxl-right"
  | "text-xxl-center"
  | "scissors-down"
  | "scissors"
  | "exchange-block"
  | "return__header"
  | "seperator"
  | "cutting-vertical"
  | "cutting"
  | "sender__from"
  | "sender__order-no"
  | "sender__return"
  | "recipient__to"
  | "recipient__name"
  | "recipient__address"
  | "recipient__logo"
  | "return__include-slip"
  | "garment__head"
  | "garment__items"
  | "garment__status"
  | "internal__size"
  | "null"
>;

declare module "mithril" { interface Static extends Fugazi<Selectors> {} }