export interface Image {
    created_at: Date;
    id: string;
    position: number;
    product_id: string;
    src: string;
    updated_at: Date;
    attachment: object;
    filename: string;
    variant_ids: string[];
}