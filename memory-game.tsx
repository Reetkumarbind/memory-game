"use client"

// Remove these imports at the top
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Star, Sun, Moon, Cloud, Flower2, type LucideIcon } from "lucide-react"
import { toast } from "sonner"
// import useSound from "use-sound"
// import flipSound from "@/assets/flip.mp3"
// import matchSound from "@/assets/match.mp3"
// import winSound from "@/assets/win.mp3"

type MemoryCard = {
  id: number
  icon: LucideIcon
  isMatched: boolean
  color: string
}

const createCards = (difficulty: "easy" | "medium" | "hard") => {
  const iconConfigs = [
    { icon: Heart, color: "text-rose-400" },
    { icon: Star, color: "text-amber-400" },
    { icon: Sun, color: "text-yellow-400" },
    { icon: Moon, color: "text-purple-400" },
    { icon: Cloud, color: "text-sky-400" },
    { icon: Flower2, color: "text-emerald-400" },
  ]

  const cards: MemoryCard[] = []
  
  // Use all icons regardless of difficulty
  iconConfigs.forEach(({ icon, color }, index) => {
    cards.push(
      { id: index * 2, icon, color, isMatched: false },
      { id: index * 2 + 1, icon, color, isMatched: false }
    )
  })

  return cards.sort(() => Math.random() - 0.5)
}

export default function MemoryGame() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [cards, setCards] = useState<MemoryCard[]>(createCards(difficulty))
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([])
  const [matches, setMatches] = useState(0)
  const [isChecking, setIsChecking] = useState(false)
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [bestTime, setBestTime] = useState<number>(0)

  // Add this useEffect to handle localStorage on client side
  useEffect(() => {
    const savedBestTime = localStorage.getItem(`bestTime-${difficulty}`)
    if (savedBestTime) {
      setBestTime(parseInt(savedBestTime, 10))
    }
  }, [difficulty])

  // const [playFlip] = useSound(flipSound)
  // const [playMatch] = useSound(matchSound)
  // const [playWin] = useSound(winSound)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive && matches < cards.length / 2) {
      interval = setInterval(() => {
        setTime((time) => time + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, matches, cards.length])

  useEffect(() => {
    if (matches === cards.length / 2) {
      if (!bestTime || time < bestTime) {
        setBestTime(time)
        localStorage.setItem(`bestTime-${difficulty}`, time.toString())
      }
    }
  }, [matches, cards.length, time, bestTime, difficulty])

  const handleCardClick = (clickedIndex: number) => {
    if (!isActive) setIsActive(true)
    if (isChecking || cards[clickedIndex].isMatched) return
    if (flippedIndexes.includes(clickedIndex)) return
    if (flippedIndexes.length === 2) return

    // Remove playFlip()
    const newFlipped = [...flippedIndexes, clickedIndex]
    setFlippedIndexes(newFlipped)

    if (newFlipped.length === 2) {
      setIsChecking(true)
      const [firstIndex, secondIndex] = newFlipped
      const firstCard = cards[firstIndex]
      const secondCard = cards[secondIndex]

      if (firstCard.icon === secondCard.icon) {
        // Remove playMatch()
        setTimeout(() => {
          const updatedCards = cards.map((card, index) =>
            index === firstIndex || index === secondIndex ? { ...card, isMatched: true } : card
          )
          setCards(updatedCards)
          setFlippedIndexes([])
          const newMatches = matches + 1
          setMatches(newMatches)
          setIsChecking(false)

          if (newMatches === cards.length / 2) {
            // Remove playWin()
            toast("🎉 Congratulations! You've found all the matches! 🎈", {
              className: "bg-purple-900 text-purple-100 border-purple-700",
            })
          }
        }, 500)
      } else {
        setTimeout(() => {
          setFlippedIndexes([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  const resetGame = (newDifficulty?: "easy" | "medium" | "hard") => {
    if (newDifficulty) setDifficulty(newDifficulty)
    setCards(createCards(newDifficulty || difficulty))
    setFlippedIndexes([])
    setMatches(0)
    setIsChecking(false)
    setTime(0)
    setIsActive(false)
  }

  if (!isGameStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 text-transparent bg-clip-text">
          Memory Match Game
        </h1>
        <p className="text-indigo-200 text-center max-w-md">
          Match all the pairs of icons as quickly as possible! Click on two cards to reveal them. If they match, they'll stay flipped. Otherwise, they'll flip back.
        </p>
        <Button
          onClick={() => setIsGameStarted(true)}
          variant="outline"
          size="lg"
          className="bg-indigo-950 border-indigo-700 hover:bg-green-500 hover:border-white text-indigo-200 hover:text-indigo-100"
        >
          Start Game
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950">
      <div className="text-center space-y-4 relative w-full max-w-xl mx-auto">
        <div className="absolute right-4 top-0 text-2xl font-bold text-indigo-300">
          ⏱️ {formatTime(time)}
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 text-transparent bg-clip-text text-center">
          Memory Match Game
        </h1>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-indigo-200">
            Matches found: {matches} of {cards.length / 2}
          </p>
          <p className="text-indigo-200">
            Best Time: {formatTime(bestTime)}
          </p>
          {matches === cards.length / 2 && (
            <motion.p
              initial={{ scale: 0, opacity: 0, y: -20 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", times: [0, 0.6, 1] }}
              className="text-2xl text-green-400 font-bold animate-bounce text-center"
            >
              🎉 Congratulations! You've found all the matches! 🎈
            </motion.p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 p-2 sm:p-4 rounded-xl bg-indigo-950/50 backdrop-blur-sm max-h-[70vh] mb-2 w-full max-w-xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: card.isMatched || flippedIndexes.includes(index) ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="perspective-1000"
          >
            <Card
              className={`relative w-[calc(30vw-2rem)] h-[calc(30vw-2rem)] sm:w-20 sm:h-20 md:w-24 md:h-24 cursor-pointer transform-style-3d transition-all duration-300 ${
                card.isMatched
                  ? "bg-indigo-900/50 border-indigo-400/50"
                  : flippedIndexes.includes(index)
                    ? "bg-indigo-800/50 border-indigo-500/50"
                    : "bg-indigo-950 border-indigo-800 hover:border-indigo-600 hover:bg-indigo-900/80"
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/5 to-white/5" />
              <AnimatePresence>
                {(card.isMatched || flippedIndexes.includes(index)) && (
                  <motion.div
                    initial={{ opacity: 0, rotateY: 180 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 180 }}
                    className="absolute inset-0 flex items-center justify-center backface-hidden"
                  >
                    <card.icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${
                        card.isMatched ? `${card.color} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]` : card.color
                      }`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 w-full max-w-md mx-auto px-4">
        <Button
          onClick={() => resetGame()}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto bg-indigo-950 border-indigo-700 hover:bg-green-500 hover:border-white text-indigo-200 hover:text-indigo-100"
        >
          Start New Game
        </Button>
        <footer className="text-indigo-300/70 text-sm text-center w-full">
          &copy; 2025 Reet Kumar Bind
        </footer>
      </div>
    </div>
  )
}