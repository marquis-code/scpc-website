import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name) private blogModel: Model<BlogDocument>,
  ) {}

  async create(createBlogDto: any): Promise<BlogDocument> {
    const createdBlog = new this.blogModel(createBlogDto);
    return createdBlog.save();
  }

  async findAll(status?: string): Promise<BlogDocument[]> {
    const query = status ? { status } : {};
    return this.blogModel.find(query).sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<BlogDocument> {
    const blog = await this.blogModel.findById(id).exec();
    if (!blog) throw new NotFoundException('Blog post not found');
    return blog;
  }

  async findBySlug(slug: string): Promise<BlogDocument> {
    const blog = await this.blogModel.findOne({ slug }).exec();
    if (!blog) throw new NotFoundException('Blog post not found');
    return blog;
  }

  async update(id: string, updateBlogDto: any): Promise<BlogDocument> {
    const updatedBlog = await this.blogModel
      .findByIdAndUpdate(id, updateBlogDto, { new: true })
      .exec();
    if (!updatedBlog) throw new NotFoundException('Blog post not found');
    return updatedBlog;
  }

  async delete(id: string): Promise<any> {
    const result = await this.blogModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Blog post not found');
    return result;
  }
}
