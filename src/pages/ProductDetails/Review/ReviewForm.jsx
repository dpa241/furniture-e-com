import React from 'react'
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const ReviewForm = () => {
  return (
    <div className="w-1/3 pr-14 border-r-[1px]">
        <div className="space-y-4">
          <h2 className="text-xl uppercase font-bold">Your Review</h2>
          <p className="text-sm text-muted-foreground">About mordern hanging bronze light</p>
        </div>
        <div className="space-y-8 pt-14">
          <div className="space-y-8">
            <Input placeholder="Your Name" className='py-2' />
            <Input placeholder="Your E-mail" />
          </div>
          <div>
            <Select >
              <SelectTrigger className="w-full space-x-1 px-0 rounded-none font-semibold">
                <p>Ratings:</p>
                <SelectValue className="" placeholder='5 Stars' />
              </SelectTrigger>
              <SelectContent className='font-semibold'>
                <SelectItem value="light">4 Stars</SelectItem>
                <SelectItem value="dark">3 Stars</SelectItem>
                <SelectItem value="system">2 Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-10">
            <Textarea placeholder="Type your message here." />
            <Button className="rounded-none">Submit</Button>
          </div>
        </div>
      </div>
  )
}

export default ReviewForm