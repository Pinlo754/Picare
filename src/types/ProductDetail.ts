import { Image } from "./Image";

export interface ProductDetail {
    id: string;
    handle: string;
    body_html: string;
    body_plain: string;
    created_at: Date;
    images: Image[];
    product_type: string;
    published_at: Date;
    published_scope: string;
    tags: string;
    template_suffix: string;
    title: string;
    updated_at: Date;
    variants: object[];
    vendor: string;
    options: object[];
    only_hide_from_list: boolean;
    not_allow_promotion: boolean;
}