# Rithmomachia — The Philosophers' Game

**A synthesized, playable ruleset** — reconstructed from five sources, resolved into one consistent version. Draft for review.

---

## 1. What it is

A two-player medieval battle of numbers, played on a double chessboard from roughly 1030 to 1600 as the only board game in the European university curriculum. Pieces carry numbers drawn from Boethius' arithmetic; you capture not by landing on a piece but by *proving an arithmetical relationship* to it. You win by marching pieces into enemy territory and arranging them in a mathematical progression.

Everything below is one coherent version. Section 10 records exactly where the historical sources disagree and which reading was taken.

---

## 2. Board and armies

An **8 × 16** board — two chessboards end to end. Played vertically, 8 wide and 16 tall.

Each side has **24 pieces**: 8 circles, 8 triangles, 8 squares. One square on each side is a **pyramid** (a stack of pieces acting as one).

**Even army (light)** — total value **1312**

| | | | | |
|---|---|---|---|---|
| **Circles** | 2, 4, 6, 8 | | 4, 16, 36, 64 | |
| **Triangles** | 6, 20, 42, 72 | | 9, 25, 49, 81 | |
| **Squares** | 15, 45, **91**, 153 | | 25, 81, 169, 289 | |

**Odd army (dark)** — total value **1752**

| | | | | |
|---|---|---|---|---|
| **Circles** | 3, 5, 7, 9 | | 9, 25, 49, 81 | |
| **Triangles** | 12, 30, 56, 90 | | 16, 36, 64, 100 | |
| **Squares** | 28, 66, 120, **190** | | 49, 121, 225, 361 | |

Bold values are the pyramids.

<details>
<summary>Where the numbers come from (optional — pure Boethius)</summary>

Start with the first four even numbers (2, 4, 6, 8) or odd numbers (3, 5, 7, 9). Square them for the second rank of circles. Then:

- **Triangles I** = sum of the two circles above it in the same column.
- **Triangles II** = Triangles I × (the same ratio that relates Triangles I to Circles II).
- **Squares I** = sum of the two triangles above it. **Squares II** repeats the ratio trick.

The result: circles are *multiples*, triangles are *superparticulars* (n+1 : n), squares are *superpartients* (n+2 : n+1). The armies are deliberately unequal — that asymmetry is the point.
</details>

---

## 3. Setup

Columns 1–8 left to right, rows 1–16 top to bottom. Even army occupies rows 1–4, Odd army rows 13–16. Dots are empty squares.

```
        c1    c2    c3    c4    c5    c6    c7    c8
 r1  [ 289][ 169]  ·     ·     ·     ·   [ 81][ 25]
 r2  [ 153][ 91▲]< 49 >< 42 >< 20 >< 25 >[ 45][ 15]
 r3  <  81><  72>( 64 )( 36 )( 16 )(  4 )<  6><  9>
 r4    ·     ·   (  8 )(  6 )(  4 )(  2 )   ·     ·

 r13   ·     ·   (  9 )(  7 )(  5 )(  3 )   ·     ·
 r14 <100 ><  90>( 81 )( 49 )( 25 )(  9 )<  12><  16>
 r15 [190▲][ 120]<  64><  56><  30><  36>[  66][  28]
 r16 [ 361][ 225]  ·     ·     ·     ·   [ 121][  49]
```

`( )` circle · `< >` triangle · `[ ]` square · `▲` pyramid

*(In the app the board flips so your own army is always at the bottom.)*

**Odd (dark) moves first** — the Even army's smaller, more flexible numbers give it the better capturing and progression chances, so the first move compensates.

---

## 4. How pieces move

One simple rule: **everything moves in a straight line, horizontally or vertically only. The shape tells you the distance.**

| Piece | Moves exactly |
|---|---|
| ● Circle | **1** square |
| ▲ Triangle | **2** squares |
| ■ Square | **3** squares |

- Distance is **exact**, not "up to" — a triangle moves 2, never 1.
- **No diagonals. No jumping.** The path must be clear and the destination empty.
- A piece with no legal move is **blocked** (and vulnerable to siege).

**Pyramids** move as any shape they still contain — see §6.

---

## 5. A turn

> **Move one piece. Then remove every enemy piece your position now captures.**

That's the whole turn. Two things worth stressing, because they're unlike chess:

- **You never move onto a captured piece.** Your piece stays where it is; the enemy piece simply leaves the board.
- **Captures are automatic and free.** After your move, every capture condition that holds in the new position resolves at once. One move can take several pieces.

Captured pieces are removed permanently.

---

## 6. The four ways to capture

### ⓵ Encounter — *equal numbers meet*
Your piece could legally move onto an enemy square (clear path, right distance) and the two pieces have **the same value**. Take it.

> Only 9, 16, 25, 36, 49, 64 and 81 appear in both armies, so this is rarer than it sounds.

### ⓶ Ambush — *two attackers, add or subtract*
**Two** of your pieces could each legally move onto the same enemy square, and their values **add** or **subtract** to that enemy's value. Take it.

> Your 6 and your 6 both bear on an enemy 12 → captured (6 + 6).
> Your 30 and your 28 both bear on an enemy 2 → captured (30 − 28).

### ⓷ Assault — *one attacker, multiply or divide at range*
Your piece and an enemy piece stand on the same row or column with a **clear line of empty squares between them**. Count those empty squares — call it *n*.

- If **your value × n = enemy value**, take it.
- If **your value ÷ n = enemy value**, take it.

> Your 8 sits four empty squares from an enemy 32 → captured (8 × 4).

This is the long-range threat: the fewer pieces on the board, the more dangerous it becomes.

### ⓸ Siege — *no way out*
An enemy piece has **no legal move at all** — every square it could reach is off the board or occupied — and **at least one blocker is yours**. Take it.

> Board edges count as walls, so corners are dangerous places to sit.

---

## 7. The pyramids

A pyramid is a stack of pieces of the same colour fused into one, standing on one square.

| | Components | Total |
|---|---|---|
| **Even pyramid** | squares 36, 25 · triangles 16, 9 · circles 4, 1 | **91** |
| **Odd pyramid** | squares 64, 49 · triangles 36, 25 · circle 16 | **190** |

- **Movement:** it may move as *any shape it still contains*. Both pyramids start with a circle, a triangle and a square among their components, so both can move 1, 2, or 3 squares — making them the most mobile pieces on the board.
- **Capturing with it:** it may attack using its **total**, or using the value of **any single component**.
- **Capturing it:** by its **total** (91 / 190), by **siege** (which takes the whole thing), or **piece by piece** — capture a component's value and only that component is removed, reducing the pyramid's total and possibly its movement.
- Lose all the square components and the pyramid can no longer make the 3-square move, and so on.

A pyramid whittled down to nothing is removed.

---

## 8. How to win

You lose immediately if, on your turn, **you have no legal move**.

Otherwise, agree on a victory condition before play. Three suggested settings:

### Skirmish — *learning the pieces*
First to capture **5 enemy pieces**, or captures totalling **150**.

### Standard — *recommended*
First to either:
- capture **8 enemy pieces**, **or**
- achieve a **Small Triumph** (below).

### Philosopher's Game — *the real thing*
**Triumph only.** Captures are just a means to an end.

---

### Triumphs

March your pieces into the **enemy half of the board** (rows 9–16 if you started at the top) and arrange **three or four** of them so that:

1. They stand in a **straight line** — row, column, or diagonal — with **equal spacing** between them (adjacent counts).
2. Their values form a **progression**.

| Progression | Condition | Example |
|---|---|---|
| **Arithmetic** | b − a = c − b | 2, 4, 6 |
| **Geometric** | b ÷ a = c ÷ b | 2, 4, 8 |
| **Harmonic** | a : c = (b − a) : (c − b) | 9, 15, 45 |

- **Small Triumph** — 3 pieces forming any one progression.
- **Great Triumph** — 4 pieces containing two different progressions among their subsets of three.
- **Grand Triumph** — 4 pieces containing all three kinds.

Only your own pieces count (captured pieces are off the board for good).

---

## 9. Quick reference — progressions available to each army

Useful for planning, and worth showing in-app as a hint panel.

**Even (light) — arithmetic:** 2·4·6 · 2·9·16 · 4·6·8 · 4·20·36 · 8·25·42 · 8·36·64 · 9·45·81 · 9·81·153 · 15·20·25 · 20·42·64 · 49·169·289
**Even — geometric:** 2·4·8 · 4·6·9 · 4·8·16 · 4·16·64 · 9·15·25 · 16·20·25 · 16·36·81 · 25·45·81 · 36·42·49 · 64·72·81 · 81·153·289
**Even — harmonic:** 9·15·45 · 9·16·72

**Odd (dark) — arithmetic:** 3·5·7 · 5·7·9 · 7·16·25 · 7·28·49 · 7·64·121 · 12·56·100 · 12·66·120 · 16·36·56 · 28·64·100
**Odd — geometric:** 9·12·16 · 9·30·100 · 16·28·49 · 16·36·81 · 25·30·36 · 36·66·121 · 36·90·225 · 49·56·64 · 64·120·225 · 81·90·100
**Odd — harmonic:** *none*

> ⚠️ **Known asymmetry:** a computer search reports the Odd army has **no** harmonic triple among its own values, so Odd cannot win a harmonic Small Triumph or any Grand Triumph in this version. If that matters, use the "prisoners change sides" variant in §10, which restores it. For Skirmish and Standard play it doesn't bite.

---

## 10. Sources, and where they disagree

Rithmomachia was **never standardized** — the rules changed for 500 years and differ from author to author. There is no single authority, so this is a synthesis, weighted toward the best-documented lineage.

### Sources used

| Source | Type | Weight |
|---|---|---|
| **Boissière (1556)**, via J. F. C. Richards' translation, *Scripta Mathematica* 12 (1946) | Primary text, academic translation | ★★★ |
| **Lever & Fulke (1563)**, full transcription — the English adaptation of Boissière; the copy-text for Moyer's scholarly edition (Michigan, 2001) | Primary text | ★★★ |
| **Whitcher, "The Battle of Numbers,"** AMS *Feature Column* (2021) | Academic exposition of Lever & Fulke | ★★★ |
| **Joyner, "The recreational arithmetic of rithmomachia"** (2025) | Modern formalization of Boissière/Richards | ★★☆ |
| **Mebben, "Rithmomachia, the Philosophers' Game"** — following Illmer (1987) and Selenus (1616) | The rival German lineage | ★★☆ |
| **Wikipedia**, following Stigter in *Ancient Board Games in Perspective* (British Museum, 2007) | Tertiary, hybrid | ★☆☆ |

The Boissière→Fulke line accounts for four of the six and is the best-attested; it is the spine of this ruleset. The German (Selenus) line was used as a tiebreaker.

### Decisions made

| Question | The disagreement | Taken here | Why |
|---|---|---|---|
| **Circle movement** | Fulke: 1 diagonal. Richards/Joyner and Mebben: 1 orthogonal. | **1 orthogonal** | 2 of 3 lineages; diagonal circles are colour-bound like bishops, which cripples them and nearly kills Encounter captures. Also lets one sentence cover all movement. |
| **Triangle / square movement** | Boissière line: 2 and 3, orthogonal. Mebben: triangle 2 diagonal, square 3 any direction. | **2 and 3, orthogonal** | Dominant lineage, and yields the clean "shape = distance" rule. |
| **"Flying" moves** | Fulke gives triangles a knight's move and squares an extended one, usable only to reposition, never to capture. Boissière rejects jumping outright; Mebben has none. | **Dropped** | 2 of 3 lineages, and it's a confusing exception that adds little. |
| **Multiply / divide captures** | Fulke: two attackers whose product/quotient equals the target. Joyner, Mebben, Stigter: one attacker, using the count of empty squares between. | **One attacker, by distance** | 3 of 4 sources, and it partitions cleanly: two-piece captures use + and −, one-piece captures use × and ÷. Also makes a visible, teachable threat line. |
| **Captured pieces** | Fulke: turn over, they join the captor and can be used in triumphs. Boissière/Joyner, Mebben: removed permanently. | **Removed** | Simpler board state, simpler to learn. Costs the Odd army its harmonic triumphs (see §9). |
| **When captures resolve** | Fulke: triggered by the move that creates them, with a fiddly exception forcing you to move into the square if the threat pre-existed. Joyner: captures may be taken before and/or after the move. | **Move, then sweep all captures** | Removes the exception entirely; unambiguous, and easy to watch happen. |
| **Chain captures** | Joyner allows them (a removal exposing a new capture). | **One pass only** | More predictable. Easy to switch on later. |
| **Triumph geometry** | Fulke: straight line, or four "like a square." Mebben: line or right angle, equidistant. Boissière/Joyner: no geometric requirement at all. | **Straight line, equal spacing** | The middle reading; visually satisfying and unambiguous to check. |
| **Triumph territory** | Fulke: "40 spaces, or as some will 48." Joyner: the opponent's half. | **Opponent's half** (rows 9–16) | Clean, generous, encourages invasion. |
| **First move** | Fulke and Mebben: Odd/Black. Joyner's worked example: White. | **Odd (dark)** | The two sources that discuss balance both say Odd, for a stated reason. |
| **Pyramid movement** | Boissière/Joyner: moves as a square only. Fulke, Mebben, Stigter: moves as any shape it contains. | **Any shape it contains** | 3 of 4, more interesting, and it gives the piecemeal-capture rule real bite. |

### Modern additions (not historical)

- **Draw rule:** 100 moves with no capture and no triumph ends the game drawn. The sources have no draw provision; without one an endgame can wander forever.
- **Suggested victory thresholds** (5 / 150, 8 pieces) are tuned for play, not attested. Boissière's own examples are 4 pieces or a total of 100.

### Variants worth keeping in the back pocket

- **Prisoners change sides** (Fulke): a captured piece flips colour and re-enters on the captor's back rank, and may be used in triumphs. Restores Odd's harmonic options; adds bookkeeping.
- **Flying moves** (Fulke): triangles and squares get knight-like repositioning moves that cannot capture.
- **No triumph until the enemy pyramid falls** (Fulke): "the game is never won until the king be taken." A long, dramatic game.

---

*Draft — for review before implementation.*
