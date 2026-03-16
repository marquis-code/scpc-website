import { BlogsService } from './blogs.service';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    create(createBlogDto: any): Promise<import("./schemas/blog.schema").BlogDocument>;
    findAll(status?: string): Promise<import("./schemas/blog.schema").BlogDocument[]>;
    findOne(id: string): Promise<import("./schemas/blog.schema").BlogDocument>;
    findBySlug(slug: string): Promise<import("./schemas/blog.schema").BlogDocument>;
    update(id: string, updateBlogDto: any): Promise<import("./schemas/blog.schema").BlogDocument>;
    remove(id: string): Promise<any>;
}
