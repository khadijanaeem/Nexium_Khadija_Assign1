"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { quotes } from "@/data/quotes"

export default function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleSubmit = () => {
    const filtered = quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase())
    setResults(filtered.slice(0, 3).map(q => q.text))
  }

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <Input
        placeholder="Enter a topic (e.g. life, success, happiness)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={handleSubmit}>Get Quotes</Button>

      <div className="mt-4 space-y-2">
        {results.length === 0 ? (
          <p className="text-gray-500">No quotes found. Try a different topic.</p>
        ) : (
          results.map((quote, index) => (
            <div key={index} className="p-3 border rounded shadow-sm">
              {quote}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
