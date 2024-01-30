import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

    blogPosts: BlogPost[] = [
    new BlogPost(1, "Exploring the Wonders of Artificial Intelligence","Artificial Intelligence (AI) is revolutionizing various industries...","John Doe", new Date('2024-01-04'), []),
    new BlogPost(2, "The Future of Space Exploration: A Journey Beyond the Stars","As technology advances, humanity continues to dream of exploring distant galaxies...","Jane Smith", new Date('2024-01-14'), []),
    new BlogPost(2, "The Impact of Climate Change on Global Ecosystems","Climate change is posing significant threats to ecosystems worldwide...","Emma Brown", new Date('2024-01-14'), []),
    new BlogPost(2, "Tech Trends 2024: What's on the Horizon?","Explore the latest technological trends that are shaping the future...","David Williams", new Date('2024-01-14'), []),
    new BlogPost(2, "A Guide to Mindful Living: Finding Peace in a Busy World","In the midst of our busy lives, practicing mindfulness can bring a sense of calm and balance...","Sophia Lee", new Date('2024-01-14'), []),
    new BlogPost(2,  "Discovering Hidden Gems: Traveling Off the Beaten Path", "Uncover hidden treasures and unique destinations by venturing off the beaten path...","Michael Adams", new Date('2024-01-14'), []),
    new BlogPost(2, "The Future of Space Exploration: A Journey Beyond the Stars","As technology advances, humanity continues to dream of exploring distant galaxies...","Tonny starc", new Date('2024-01-14'), []),

  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find((p) => p.id === id);
  }

  addBlogPost(newPost: BlogPost): void {
    newPost.id = this.blogPosts.length + 1;
    this.blogPosts.push(newPost);
  }


}
