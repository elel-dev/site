---
title: "Bitcoin paper"
description: "Analysis of the first scientific article that the individual, or more likely the group, under the pseudonym Satoshi Nakamoto, published in 2008: “Bitcoin: A Peer-to-Peer Electronic Cash System."
pubDate: 2025-04-30
---

## Table of Contents

- [Introduction](#introduction)
- [Whitepaper Analysis (1/4): from intuition to cryptography for the blockchain](#whitepaper-analysis-14-from-intuition-to-cryptography-for-the-blockchain)
- [Whitepaper Analysis (2/4): from the blockchain to a distributed system](#whitepaper-analysis-24-from-the-blockchain-to-a-distributed-system)
- [Whitepaper Analysis (3/4): how to get this darn network started!](#whitepaper-analysis-34-how-to-get-this-darn-network-started)
- [Whitepaper Analysis (4/4): from theory to practice](#whitepaper-analysis-44-from-theory-to-practice)
- [Why "there's only Bitcoin"](#why-theres-only-bitcoin)

---

## Introduction

The starting point of this journey can only be the starting point of the journey. An analysis of the first scientific article that the individual, or more likely the group, under the pseudonym Satoshi Nakamoto, published in 2008: “Bitcoin: A Peer-to-Peer Electronic Cash System.”

This initial post will explore the reasons why Bitcoin maximalists adhere to the motto: "only Bitcoin exists." By delving into this dogmatism, we will attempt to unravel whether the origins, protocol, and financial aspects of the original blockchain and cryptocurrency live up to this standard.

In the introduction of the article, we read that the problems Bitcoin aims to solve are the inherent weaknesses of trust-based models, where:

- Totally irreversible (electronic) economic transactions are not truly possible, as governments, central banks, and other financial intermediaries, in managing the financial system, reserve the right to intervene and modify transactions or, more generally, financial flows to ensure macroeconomic stability (for example, in the event of financial crises, monetary policies, or capital controls);
- Merchants, by accepting online payment services, find it convenient to distrust their customers, bothering them to obtain more information than they would otherwise need;
- A certain percentage of fraud is accepted as inevitable;
- The very ownership of infrastructures, services, and (more or less personal) data is in the hands of third parties;

The proposed solution is an electronic payment system based on cryptographic proof instead of trust.

Before delving into what cryptography is and how it is used in Bitcoin, we need to understand the intuition and come to terms with what the media describes: either as a system impossible to understand for purist computer nerds, or as a large cauldron of illegality relegated to terrorists or anarcho-insurrectionist cyberpunk hackers.

Bitcoin is simply a lucid resolution of problems, where one thing is introduced after another to reach the objective.

## **Whitepaper Analysis (1/4): _from intuition to cryptography for the blockchain_**

The problem to be solved is removing the need for a third party (e.g., banks) for the settlement of electronic payments.

**First Problem: Double Spending.**

The first intuitive, and most important problem to solve, is ensuring that the person you are interacting with possesses the money they claim to have. How can we do this? We need to track all the movements the person has made in the past (we cannot exclude even one). If you can be sure of the complete history of their balance, then you can trust that the funds are there: if the only transactions are +10, -5, then you know that 5 remains to be spent.

Obviously, this is not a practically feasible solution, for at least the following reasons:

- **Onerous:** It's impossible to do these calculations on your own for all potential economic encounters; we're not talking about keeping track of a small local bar.
- **Trust:** It's difficult to ensure that transactions have not been falsified. This problem is summarized and simplified with the name "double spending" (falsifying transactions so that a spending is not recorded, thus the same amount of money can be spent twice).

**First Solution: Ledger.**

One solution is to introduce a central entity, such as banks or the mint, to ensure that all transactions are verified and ordered so that we are sure of what happened first. To give a practical example, let's think about our daily lives: the employer makes a bank transfer with their bank, the money arrives at your bank; you go shopping, you spend with a card/make a transfer to a merchant. The merchant is sure of the chain of previous transactions that are bringing the money from your bank to theirs, because at the time of payment by card or the creation of a transfer, it is the customer's bank that accepts or rejects the transaction. What is the step that allows the payment to go through? The verification that the chains of previous transactions have created sufficient funds to allow the current transaction; in other words, that the purchase from the merchant is covered.

A possible solution involves introducing a central authority, such as banks or the mint, that verifies and orders all transactions to ensure a clear chronological order of events. Let's take a practical example: imagine your daily life. Your employer makes a transfer from their bank, which transfers the money to your bank. Then, when you make a purchase and pay by card or bank transfer, the merchant can be sure that the money is coming from your bank to theirs. This happens because it is the customer's bank that verifies and approves or rejects the transaction at the time of payment. The question, then, is: what step allows the payment to proceed? The answer is that the bank verifies that the previous transactions have created sufficient funds to cover the amount of the purchase from the merchant.

And so on for all previous transactions (up to the hypothetical issuance of the currency itself).

The superstructure of society confuses us about trivial mechanisms. Money is created, printed, and distributed. After a thousand twists and turns, it arrives in your current account. The entire financial system is nothing more than a very large ledger. More money, less money; this for the eternity of time.

**Bitcoin: Let's Make the Ledger Public.**

In very essential words, the article reads: to do the same but without a trusted authority, (1) transactions must be publicly announced, and we need a system through which participants (2) agree on a single past of the order in which they were received. But how to do this?

For the first point, it is trivial; we simply need to make these transactions publicly accessible online.

For the second point, we need to introduce cryptography. Take a breath; it's not difficult at all.

**Cryptography Digression.**

If you are reading this article from a device connected to the internet, I recommend following this paragraph using the following website: [https://andersbrownworth.com/blockchain/hash](https://andersbrownworth.com/blockchain/hash), where you will find a practical interface to put what we will discuss into practice.

SHA256 is the name of the first piece we will talk about. SHA is the acronym for Secure Hashing Algorithms. An algorithm is a series of instructions, simple or complex, that given an input return a certain output (called a hash... not the one you smoke). To understand it, imagine having an algorithm called Pluto: Pluto's job is to replace all vowels with the vowel 'u'. The word "albero" (tree) passed through Pluto returns the word "ulburu". Are you following me? Good, congratulations, you've understood half of cryptography.

SHA256's job is to transform any input into a 256-bit hexadecimal sequence called a "hash." Don't be scared: hexadecimal is like saying alphabetical, but the alphabet is different and is composed of the numbers from 0 to 9 together with the letters from a to f. Only 4 bits are needed to represent this entire alphabet. Don't trust me? Look below:

Correspondence:
0 in hexadecimal is 0000 in binary
1 in hexadecimal is 0001 in binary
2 in hexadecimal is 0010 in binary
...
9 in hexadecimal is 1001 in binary
A in hexadecimal is 1010 in binary
B in hexadecimal is 1011 in binary
C in hexadecimal is 1100 in binary
D in hexadecimal is 1101 in binary
E in hexadecimal is 1110 in binary
F in hexadecimal is 1111 in binary

So imagine a letter formed by \_ \_ \_ \_ spaces (bits) that can be either 0 or 1.

Let's go back to SHA256. 256 bits means we have 256 of these \_ spaces. So the name of this algorithm is simply telling us that its job, similar to Pluto's, is to produce, given any input, 256 (total bits) / 4 (bits needed for a letter) = 64 hexadecimal letters.

Which ones? Here's the beauty of it. It's impossible to know in advance. You wouldn't have asked, regardless, what letters the word would have after passing through Pluto. No, because it depended on the incoming words ("albero" becomes "ulburu," but "cane" (dog) becomes "cunu")!

The internal structure of the SHA256 algorithm is obviously much more complex than that of our Pluto, but we don't need to know the path of the input. We only need the output.

Two examples of SHA256 output:
albero = a107d76d7a75f34d5997da1c10ad97aeff245530bfe549af5f10bc5c8402fba1
cane = df39220189ca8225b3ef4bb8f3654b2217c11b056cb764a806586f3b95530052

You'll tell me... What's the point of all this mass of letters? Certainly, it's not very convenient for us to work with this set of letters and numbers, but for the computer, it makes no difference. Look how long the text of this article is compared to those 64 letters; yet you have no difficulty following it! It's simply about formats and conventions; don't get confused!

The necessity of arriving at exactly this format is as simple as it is fundamental. To understand it, let's go back to our dear algorithm. Would you please use our Pluto algorithm on the word "cono" (cone)? What do you say? "cunu"? Wasn't "cane" (dog) "cunu" too??

This phenomenon in cryptography is known as a collision, that is, when two different inputs produce the same output through a hashing algorithm. The question arises spontaneously... "Are you telling me that with 64 hexadecimal letters I can encode any word without ever running the risk of finding two identical hashes??" Exactly, the probability is exactly one in 2256 (we are talking about this number: 1 possibility out of 115792089237316195423570985008687907853269984665640564039457584007913129639936): so low as to be considered impossible.

This number comes from the fact that SHA-256 produces a 256-bit hash. Each bit can be either 0 or 1, so there are 2 possibilities for each bit. Since a hash is 256 bits long, the total number of possible combinations is given by: 2x2x2x2... 256 times.

Returning to "cane" (dog) and "cono" (cone), the two hashes, despite coming from two very similar inputs, are completely different ("avalanche effect").

cane = df39220189ca8225b3ef4bb8f3654b2217c11b056cb764a806586f3b95530052
cono = 7be50c758efd571dfd149c6736084e7a286eea788e42886847d8556e1d23409b

These algorithms, like Pluto (if you think about it), are not limited to a single word, but also apply their mechanism to phrases, numbers, any type of written input.

1 = 6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b
il mio nome è satoshi (my name is satoshi) = 89e4ddc70499171c617e40c89b2cd608e71e4921713819d3222a530a7c2b9a5
3 + 2 = b1143f1f1e44cc246161976ff5f86854e35f4bb195a537d5e9653cab56a4990

Why not, maybe even a series of economic transactions:

The entire block of text below:

2025-03-28
marco → 5€ → mario
mario → 2€ → alberto
alberto → 2€ → macchinetta caffe (coffee machine)

results in the following hash:
651db1dc366feea2b9065af08683200a7f252989600b9803da2374df0301cc63.

The last missing element to conclude this cryptography digression is the understanding that the algorithm is one-way; there is no way (physically, due to the nature in which the algorithm was written) to go back from the hash to the input on which the algorithm was used (unlike Pluto). This characteristic of non-reversibility perfectly matches another fundamental property of hashing algorithms: their consistency. For the same input, the same output will always be generated. If I use the algorithm twice on "cane" (dog), I will always get the same hash (just like with Pluto).

You can experiment yourself with creating these hashes by following the link at the beginning of the paragraph and clicking on the "hash" and "block" sections.

Because yes, you have already understood half of the blockchain. A block is nothing more than a set of economic transactions from which a hash is generated, by inputting the list of transactions and the date on which the hash is created.

Now I ask you, what happens if we try to alter the date on which these transactions occurred? Or, what happens if we delete the second transaction? If you've been following, you should have guessed the answer: the hash would be completely different (try it yourself).

This means that we have found a way to photograph a series of transactions at time t. That is, we have a mechanism to create irrefutable proof, and at the same time, we have created a method to prove its veracity.

But what happens at time t+1? How do we have a historical record? How do we create a chain of blocks?

Simply ingenious: I insert the hash of the previous block into the block, thus into the generation of the hash!

![Blockchain hash chaining](/images/blog/blockchain-hash-chaining.png)

(ps: ignore the element with index 2 "nonce" for now; you'll understand what it's for later).

This means that the hash of the previous block influences the generation of the hash of the block at time t+1.

Now I ask you the same question: what happens if I modify the amount that Alberto gave to Francesco in the second block so that it appears that Alberto still has one euro to buy an espresso from the vending machine? Exactly, I modify the hash of block 2 (because, again, I'm modifying the input), but what effect does this have on block 3? By changing one of the inputs, I change the hash output of the second block, which in turn ends up in the third block, thus invalidating the third block as well, and so on.

![Blockchain modification effect](/images/blog/blockchain-modification.png)

The mechanism we have just described is exactly what makes a blockchain so secure and immutable. The one-way hashing algorithm and the chaining of hashes between blocks are key to ensuring the veracity of the blockchain.

When each block contains the hash of the previous block, any modification in one of the blocks (such as altering a transaction or a date) would immediately change the hash of that block. But it doesn't end there: since the hash of each subsequent block depends on the previous one, any change would propagate throughout the entire chain, invalidating the following blocks. In other words, if someone tried to modify a transaction, the entire sequence of blocks would immediately become inconsistent and easily detectable, thanks to the difference in the hashes.

This chaining between blocks, combined with the impossibility of calculating the input starting from the hash (one-way property), makes each block of the blockchain unchangeable without altering the entire chain, thus creating irrefutable proof that the transactions have been recorded correctly and have not been manipulated. This is exactly what guarantees the veracity and security of a blockchain: its structure is designed to make it impossible to modify the data without leaving obvious traces, preserving the integrity of the information over time.

Of course, it doesn't mean checking everything by hand with a magnifying glass! All of this is automated.

## Whitepaper Analysis (2/4): _from the blockchain to a distributed system_

From the intuition of the blockchain, we need to take a small step forward to describe the real dimension of the blockchain.

First of all, we need to understand what is meant by a peer-to-peer (P2P) network: an internet connection paradigm in which, instead of connecting all devices to a central server for receiving services or content (Instagram photos, for example), the devices connected to the network are considered "equals" (peers) and connect only with each other without a central point of reference. Each peer can (1) send and receive data; (2) share resources (such as files, computing capacity, or bandwidth); (3) collaborate with other peers without the need for a "central authority." When a device (peer) connects to a P2P network, it connects to a series of other peers already present in the network. Each peer, in turn, is connected to others, creating a distributed and decentralized network. When a new peer joins the network, it needs to discover the other peers to be able to communicate with them; there are indexes that each peer keeps updated that allow each new peer to easily find others without the need for a central server (a bit of a simplification of the so-called bootstrapping mechanisms).

In a P2P network, data (for example, files) is not stored on a centralized server. Each peer stores a part of the data and shares it with other peers. A famous example of this type of system is BitTorrent: when a peer wants to download a file, it downloads it in multiple parts from various other peers that have those parts; once a peer has downloaded a part of the file, it can start uploading it (sharing it) with other peers. By doing so, the network becomes more resilient: the more peers there are, the faster and more stable the file transfer will be. Imagine ants that manage in a coordinated and efficient way to distribute a huge piece of bread, without the need for a central crane to move it.

A crucial aspect of P2P networks is decentralization. There is no central point of control that can influence or manage traffic. Instead, each peer is autonomous and responsible for its own actions. This decentralization is what makes P2P networks very robust and difficult to disrupt or censor. P2P networks are also highly scalable. As new peers join the network, the overall capacity of the network increases. For example, if more people share a file, the availability of that file grows, and download times for each peer decrease.

So what does Bitcoin have to do with this? Do you remember the image from before where we saw the blockchain for the first time? Well, imagine replicating that chain of blocks within this type of P2P network, so that millions of nodes have the exact replica of the same chain. This takes on an even more remarkable robustness: to maliciously intervene on the network, it is no longer enough to simply modify a transaction present in the chain and then recalculate the hashes of all subsequent blocks; this operation needs to be done millions of times to modify the copy present in each node. And be careful, while new blocks are continuously being added to this chain.

The question arises spontaneously: who adds blocks to the chain?

Whoever wins the game called "proof-of-work." A game? More or less, come on. Let's try to understand what it is. Do you remember what happens to the hash of "cane" (dog) if we write "cano"? It changes completely. Well, the intuition is the same. What happens if instead of "cane," we write "cane1"? It changes completely... and if we write "cane2"? "cane3"? Once again, it will always change completely.

Do you remember the word "nonce" that we saw above in the blockchain image? Well, that's the name of the numbers I'm adding to "cane." Proof-of-work is exactly this, that is, the search for a number to add to the economic transactions that will be included in the block, to modify the hash in a certain way.

Modify how? Proof-of-work involves finding a value that returns a hash that starts with a certain number of zero bits. If you notice, in fact, the hashes of the blockchain blocks (at the bottom) all start with a certain number of zeros.

The average work required is exponentially proportional to the number of zero bits required and can be verified by performing a precise procedure that you should be able to imagine: it involves taking the hash of the received block, extracting the nonce included in the block, and recalculating the hash of the block (with the nonce). If the recalculated hash matches the hash of the received block and meets the requirement of the number of initial zeros, the PoW is considered valid. Therefore, verification again involves calculating hashes and comparing them with the provided hash.

To compensate for the increase in hardware speed and the changing interest of operating nodes over time, the difficulty of the proof-of-work is determined by a moving average that aims for the creation of an average number of blocks per hour. If blocks are generated too quickly, the difficulty increases.

The search for this number can take a very long time; it is a non-trivial operation and is very energy-intensive. This operation is called "mining" the block, and the environmental impact attributed to Bitcoin is exactly related to this.

Proof-of-work has a dual effect.

Once the computational effort has been spent to satisfy the proof-of-work, the block cannot be modified without redoing the work. Since subsequent blocks are chained after it, the work required to change the block would include redoing all subsequent blocks. This adds the definitive security layer to the blockchain because a simple forgery, even of an insignificant comma, involves an immeasurable effort for what we have seen so far:

- The hashes of the blocks are chained to each other.
- The chain is distributed across a P2P network.
- Although generating a single hash of a block is computationally inexpensive, finding the nonce that produces a hash with the required difficulty is extremely time-consuming, energy-intensive, and costly, as it requires calculating a large number of hashes.

This computational cost ensures that nodes always consider the longest chain as the correct one and will continue to work to extend precisely this one. If two nodes transmit different versions of the next block simultaneously, some nodes may receive one or the other first. In that case, they work on the first one they received but save the other branch in case it becomes longer.

In fact, the network is designed to resolve this situation autonomously. Nodes that received block A will immediately begin searching for the Proof-of-Work for the next block (A+1), based on the hash of block A. Similarly, nodes that received block B will begin mining block B+1, based on the hash of block B.

The key is that the chain that first manages to add another block (either A+1 or B+1) will become the longest chain. Since nodes consider the longest chain as the valid one (because it represents the most computational work spent), the nodes that were working on the shorter branch (the orphan) will recognize that the longer chain has accumulated more "proof of work." At this point, these nodes will abandon the shorter branch and switch to working on extending the longer chain, effectively discarding the blocks of the orphan branch.

This fork resolution mechanism is intrinsic to the protocol. The probability of an alternative branch surpassing the main chain in length (the one with more accumulated work) decreases exponentially with each block added to the main chain. It would require an attacker (or a group of nodes) to have computational power greater than that of the rest of the network combined for a prolonged period to create and maintain a longer chain and thus rewrite the history of transactions.

In summary, Proof-of-Work not only protects individual blocks but also acts as a distributed and implicit voting mechanism on the validity of the transaction history (thus also ensuring its resilience against external attacks). The chain with the most computational work embedded is the one that the network as a whole recognizes as the truth, ensuring a convergence towards a single coherent version of the blockchain and preventing permanent forks that would undermine the integrity of the system.

## **Whitepaper Analysis (3/4): _how to get this darn network started_!**

The last problem to solve is this: how does it all begin? Well, before understanding that, I need to give you the last piece of the puzzle. The incentive.

By convention, the first transaction included in a mined block is artificial, meaning different from all the real transactions that have occurred, because it is attributed directly by the system to the creator of the block; that is, it is a special transaction that "coins" currency and attributes it to the block creator as a reward for their computational work. In other words, in addition to "Francesco gave one euro to Mario," at the beginning of the list of transactions we want to freeze in a block, we will add "the Bitcoin system rewards the network node that solved the proof-of-work game for this block with 2€" (purists here would get angry because there is no "Bitcoin system": it is the protocol itself, implemented by the nodes' software, that allows the miner who solved the PoW to include a transaction creating new coins in the first place of their block; the "minting," that is, is still a decentralized process regulated by the code).

This provides an incentive for nodes to support the network and provides a way for the initial distribution of coins in circulation, given that there is no central authority that can issue them.

The constant addition of a certain amount of new coins is analogous to the process of gold miners, who spend resources to increase the amount of gold in circulation. In our case, CPU power is spent, and electricity is consumed. This is why the term "mining a block" is used.

Breathe.

Although the analogy is useful, it's important to note that the issuance of Bitcoin is not "constant" over time. It is predetermined in the code and decreases over time at regular intervals (the halvings, approximately every 4 years), asymptotically tending towards a maximum limit of 21 million Bitcoin. Gold mining, on the other hand, has no predefined maximum limit, and its production can vary based on economic and geological factors. This has an anti-inflationary effect that makes the market value of BTC very attractive (we'll talk about this later).

The incentive also adds an additional layer of security to the network because it can help encourage nodes to remain honest. If a malicious user were greedily able to assemble more CPU power than all the honest nodes combined (something not even practically feasible at present), they would be faced with either fraudulent use or use aimed at coining new money through participation in the proof-of-work game. They will necessarily find it more profitable to play by the rules, as these rules favor them with more new coins than all the others put together. The alternative would make little sense, as compromising the network would effectively undermine their own wealth; it is anti-economic.

The first allocation of Bitcoin in 2008 did not occur through a sale or a traditional distribution of coins (as might happen in an Initial Public Offering IPO when companies go public). When the Bitcoin network was launched on January 3, 2009, the founder Satoshi Nakamoto mined the first block of the blockchain, known as the "genesis block," marking the official start of the Bitcoin network. In this block, Nakamoto received a reward of 50 Bitcoin as part of the mining mechanism. However, this reward was never spent and therefore was not really "allocated" or transferred to anyone; although the 50 Bitcoin were created in the genesis block, in fact, they are not spendable due to a limitation in the code executed by the blockchain nodes.

The first "spendable" allocation of Bitcoin occurred later when Satoshi Nakamoto mined other blocks and began exchanging Bitcoin with other community members or for services. The first documented transaction in which Bitcoin was used to buy something occurred on May 22, 2010, when Laszlo Hanyecz, a programmer, paid 10,000 Bitcoin for two pizzas, in what is now known as "Bitcoin Pizza Day" (marking the first retail use of Bitcoin). The value of those pizzas today, at the current market price of Bitcoin, is around $9,000,000,000. A bitter pill to swallow.

I have one for you too. It's not over yet; before moving on to the next chapter from theory to practice, we need one last effort. We need to understand how Laszlo Hanyecz paid for those two pizzas. Maybe you've gotten hungry after all this reading!

First of all, let's clarify one issue. So far, we've only talked about the blockchain, but we've all initially heard of Bitcoin as a "digital currency" or "cryptocurrency." In fact, it's true:

- When we use Bitcoin to talk about the "blockchain," we are referring to what we have discussed so far, that is, the decentralized system of transaction recording based on cryptography.
- The point to understand is that the transactions that are recorded are not in euros or dollars, because this would introduce an external dependency on the network that would undermine its meaning and stability (in this article, we have referred to these currencies to simplify some concepts). Transactions within the Blockchain exchange a certain currency, called Bitcoin, between network participants.

So, we can also use the word Bitcoin to refer to this "new" digital currency, which is not issued by a Central Bank but by the system itself, thanks to the reward given to participants who solve the proof-of-work, contributing to the development of the chain of blocks. As a currency, it is the digital currency you can use to make purchases, invest, or exchange. The abbreviation to refer to Bitcoin as a currency is BTC, just as the abbreviation for the dollar monetary system is USD and for the euro is EUR.

Take it easy; this point is crucial. Let's repeat it.
If you participate in the network, you exchange BTC. Forget about euros, dollars, etc.
You are part of the network; a t-shirt costs a certain amount of BTC; you will send this amount of BTC to the merchant. This transaction will end up in the Blockchain: "from you to Mario Rossi 2 BTC" (as you can see, the currency doesn't change; the substance is the same).

So why are we all used to hearing that "the price of BTC has fallen," "it's at an all-time high," or "don't invest in BTC; you'll become poor or rich, who knows"? To understand this, we need to clarify this point: there are only two ways to obtain BTC:

1. You participate in the network, contributing your computational energy, trying to win the proof-of-work game and thus obtaining a certain amount of BTC.
2. Someone sends you a certain amount of their BTC. Good old barter: you give them ten euros in hand, and they send you... how many BTC? Uhm... Who knows!

Exactly, since parallel economies are created, connections between the two must also be created to understand how to exchange the various quantities. The financial system is simply an aggregator of supply and demand, where the market price of a product ("Apple shares," "1 BTC," "an ounce of gold") is equal to the last trade that occurred, that is, the meeting between the highest purchase offer (bid) and the lowest selling offer (ask) in an exchange's order book. The last trade reflects this equilibrium point at that moment. This value is obviously impossible to explain; it refers to infinite variables and is essentially linked to the complexity of human beings, but certainly "the higher the price, the more value we attribute to it." The price of 1 BTC recently touched the $100,000 mark (before falling again), and since it has only been in circulation for 15 years, it has been the financial asset with the fastest price growth in history... It probably makes sense to understand a little more, don't you think? Exactly, a handful of BTC are currently worth as much as your house. If you had exchanged a few euros for many BTC at the beginning of its history, you would now be incredibly rich. Like the pizza guy in the story above.

Today, there are systems that allow you to buy BTC with great ease; it's all very simple and like browsing any e-commerce site (indeed, much simpler than choosing the right product on Amazon), and they are called Exchanges. Their role is to facilitate exchange within the market between those who want to sell and buy BTC (retaining a certain percentage). These are also the tool that the legislator has indicated as the most correct source for carrying out these exchanges because an identity document is required (a procedure known as "KYC," i.e., "know your customer"). Forget about hiding your identity and evading taxes.

The question remains: how did it reach such a high price? There are essentially 4 reasons, and we will explore them in the last chapter:

1. **Bitcoin has a limited supply (even more than "scarce" like gold):** As the code is written, only 21 million Bitcoin will ever exist. The idea of having something that cannot be created infinitely but is limited makes people consider it a good store of value, just like gold. In a world where traditional currencies (like the euro or the dollar) can be printed in large quantities by governments, Bitcoin stands out for its scarcity.
2. **Bitcoin is not controlled by any central bank or government.** This makes it attractive to those seeking a form of money that does not depend on the monetary policies of states (think of countries like Turkey or Argentina, whose own currencies' value has been eclipsed). In times of economic uncertainty or inflation, people turn to Bitcoin to protect their assets from the loss of value of traditional currencies.
3. **Over time, more and more people, companies, and investors have begun to believe in Bitcoin as a store of value.** Today, many companies accept it as payment, and some investors consider it a way to diversify their portfolio, just as they would with gold or other safe-haven assets. The increase in this demand has led to a significant increase in its price.
4. **The blockchain is very secure and transparent.** Every transaction is recorded immutably, which means it is almost impossible to tamper with the data. This has increased investor confidence, making Bitcoin an asset that cannot be easily manipulated or counterfeited.

Okay, I've convinced you! You finally want to buy BTC too!
...I'm sorry, there's still one element to understand: your crypto wallet.

## **Whitepaper Analysis (4/4): _from theory to practice_.**

A Bitcoin wallet is **_NOT_** a digital container where you can store, receive, and send your Bitcoin; it is **_NOT_** like a physical wallet that you use to hold your coins and banknotes. It is **_NOT_** like a bank that keeps money for you.

A crypto wallet is nothing more than another ingenious intuition that lays its foundations on cryptography. Let's forget the concept of wallet and bank. Yes, perhaps it's a bit more complex this way, but it's useless to fill your head with half-metaphors to pretend to understand things.

Decentralization requires extra effort, greater maturity. The crypto wallet, like the great generational step we are used to when we are given the trust of driving or leaving the house alone, is composed of a set of keys. Two keys. Made of metal? No, cryptographic, that is, two strings of text similar to the hash we saw above.

Don't be scared; what would be the point if the two keys were made of metal? It was obvious that they would have a different format; we are in the digital world after all.

Do you want to see what they look like? It doesn't make much sense for us human readers, but as before... It's just a format; you've read many more letters so far. In any case, I'll indulge you.

![Bitcoin wallet keys](/images/blog/wallet-keys.png)

The two keys have two distinct names (which should suggest something to you):

- **Public Key:** This is the first key and functions as your unique public identifier; it's like your home address or an online nickname. You can think of it as your IBAN if you want; this is the only comparison I'll grant you. The generation of this key ensures uniqueness; no two IBANs are the same.
- **Private Key:** This second key is as if your physical signature used to sign documents functioned as a password, and vice versa. That is:
  - You must not share it with anyone.
  - You will use it as a way to verify that it is you (signature).
  - If it is stolen, they can pretend to be you (password).

I imagine a spontaneous question arises: when I open online banking, I don't have two IBANs; I only need one! What is the private key for? It's not easy to understand because the paradigm is completely different; the bank with its application that you access with a password after a tedious identity verification process no longer exists. To ensure the authenticity of transactions without an external intermediary, two keys are needed, and we will understand why!

Although Alice does not connect to any online banking that ensures the transaction originated from her account, when she wants to send bitcoins to Bob, today there are graphical software interfaces (called wallets) that simplify the underlying cryptographic process, making it all automatic. Today, the operation is practically identical from the user experience point of view, but what happens is very different and is the last piece you need to understand how transactions work.

Alice creates a signed digital transaction.

This transaction specifies Bob's Bitcoin address (his public key) as the recipient and the amount of BTC she wishes to send. To authorize this transaction and prove to the network that she is the legitimate owner of the bitcoins she is spending, Alice digitally signs the transaction using her private key. This step is fundamental; otherwise, what prevents me from writing on the blockchain that Alice sent those BTC to me? It would be like taking control of her online banking.

To understand what it means to "digitally sign" a transaction, we need to understand another small piece of cryptography, the reason why there are two keys. Two-key systems are called "asymmetric cryptosystems," where each pair of keys is formed in such a way that what is encrypted with one can be decrypted ONLY with the other. Although mathematically, during the generation of the key pair, there is no intrinsic label of 'public' and 'private,' in the operational and security context of an asymmetric cryptosystem, the keys assume distinct and non-interchangeable roles. Reversing these roles would make the system insecure or unusable. Let's try to understand its usefulness, and you'll see that it will all become clearer.

Let's start by understanding what "encrypting" means. Remember when we talked about hashes? Well, it's NOT that, but it looks exactly the same. They are two different algorithms, but the result is a string of symbols. However, one of the characteristics of the hashing algorithm was to ensure that you could not go back to the original content. Once "cane" (dog) goes through the hashing algorithm, no one in the world, even with the most powerful computer, is able to go back to "cane" from the bunch of characters that come out. This is NOT encryption. Encrypting means transforming data into an unreadable format (ciphertext) using a key, so that only those who possess the other correct key (for decryption) can restore it to the original format (plaintext). The algorithm takes the message "cane" and one of the two keys, returning a pseudo-hash (to put it simply). To go back to "cane," there is ONLY one way: using the OTHER key; anything else entered into the algorithm will result in the wrong content (completely random, not even similar). You'll ask, what's the point?

The two keys can be used in two ways, depending on our objective: confidentiality or authenticity + integrity. From here on, it makes sense to distinguish the two keys into "public" and "private" because their exposure becomes sensitive.

- **Confidentiality:** I give you my public key; you pass your message through the algorithm with this key; then you send me that meaningless mush of characters. Only the other key, the private one, can now decrypt this message. The ownership of the key, therefore, makes one the owner of the message. Anyone who comes into possession of my public key can encrypt messages that my private key can decrypt, but no one else possesses my private key, so only I can decrypt the content (confidentiality).
- **Authenticity and Integrity (mode used in BTC):** Conversely, now I'm not interested in the content I encrypt remaining private; I'm only interested in the absolute certainty that it remains authentic to the original and the possibility for everyone to be equally sure of this. For this reason, I encrypt the content of a message with my private key (which remains secure, by the way; it's not exposed in the encryption) and I expose the public key. Anyone can at this point decrypt the message I sent using this public key; the success of this operation allows us to verify that only my private key could have generated that content (thus verifying the ownership of that message, i.e., authenticity). But how to be sure that the message is actually the original one (integrity)? Heheh, ready for the mindblow? Let's go back to our old friend hash...
  **The Sender (you, for example):**
  1. Before sending the message, you calculate the hash of the message.
  2. Then you encrypt that hash with your private key.
  3. Along with the encrypted message, you also send this encrypted hash (the famous digital signature).
     **The Recipient:**
  4. Receives the encrypted message + the encrypted signature.
  5. Decrypts both using the public key.
  6. Recalculates the hash of the message.
  7. Compares the two hashes:
     - If they match → message is intact and signed by you.
     - If not → either it has been modified, or the signature is false.

The genius in you is screaming to tamper with the content and simply recalculate the hash. Okay, if you tamper with the content and calculate a new hash, you can also generate a new correct hash for the modified content. But you cannot sign it (i.e., encrypt it with the private key of the original author) because you do not have their private key. This is what protects the entire system: Only the owner of the private key can create a valid digital signature.

One clarification: we don't even encrypt the message (I just wanted to help you follow); what's the point if the public key, accessible to everyone, can decrypt it? This would also have a considerable cost, given that the algorithm to guarantee this two-key game has to work quite a bit. To be precise, I only encrypt the hash of the message, since this is enough to guarantee ownership and integrity: again, only the private key corresponding to the public key used for verification could have produced that specific signature for the message's hash, and only the content of the message could have generated that hash, so we are safe!

But let's get back to Bitcoin, shall we?

This cryptographic signature is unique to the transaction and Alice's private key. Anyone viewing the transaction on the blockchain can verify the authenticity of the signature using Alice's public key (which is public, indeed), but no one, not even Bob or the network validators, can trace back to Alice's private key from the signature or the public key. This ensures that only the owner of the private key of a public key can move funds to another public key.

Yes, a big complication, but this gets rid of banks... It had to be complicated enough, come on!

Once signed, the transaction is transmitted to the P2P network of Bitcoin nodes. These nodes, after verifying the validity of the transaction (checking that Alice actually has sufficient balance and that the signature is valid), include it in a new block they are trying to mine through the Proof-of-Work process.

When a node manages to find a valid Proof-of-Work for the block containing Alice's transaction, this block is added to the blockchain, becoming part of the immutable history of transactions. Once the block containing Alice's transaction receives a certain number of confirmations (i.e., subsequent blocks added to the chain after it), the transaction is considered irreversible, and Bob receives the bitcoins in his address, being able to spend them in turn using his private key.

One of the fascinating aspects of the blockchain is that all these transactions are not private and only appear in your online banking, but are publicly recorded. Once the entry point is known (the exchanges through the KYC procedure of Alice and Bob, for example), it is possible for anyone to follow the money flows (forget about clandestinity!).

In reality, when we talk about "receiving" bitcoins at an address, we are only saying that the transaction has been recorded in the ledger, just like a bank transfer. The online banking or the Bitcoin wallet simply go back to the entire set of transactions and show on the screen the net balance resulting from these transactions.

Thus, we return to the starting point from which we began: +10 -5, I show +5 on the screen. I don't send a chest of BTC gold by carriage; as in the normal financial system, it's all digital: only the intermediary changes, as we said at the beginning.

The solution we have discussed so far is Bitcoin, an electronic payment system based on cryptographic proof instead of trust.

## Why “there’s only Bitcoin”

I promised you we'd arrive at this conclusion. First, I need to briefly tell you about the rest of the crypto landscape.

If Bitcoin represents the "first generation" and is often compared to digital gold for its primary function as a store of value, the crypto landscape has evolved enormously, giving rise to numerous "altcoins" (alternatives to Bitcoin) that explore different functionalities and technical architectures.

Since the birth of Bitcoin in 2009, thousands of other cryptocurrencies have emerged, each with its own goals, technical innovations, and trade-offs. We can group them into some main categories:

- **Layer-1 (L1) Protocols with Extended Functionality:** Many altcoins aim to improve the perceived limitations of Bitcoin, such as transaction speed and scalability. Examples include Ethereum, which introduced the concept of smart contracts—self-executing contracts whose code defines the terms of the agreement. This has paved the way for a vast range of decentralized applications (dApps). Other L1 protocols like Solana, Cardano, Polkadot, and Avalanche compete by offering different architectures to achieve greater speed and scalability, often with trade-offs in terms of decentralization or complexity.
- **Stablecoins:** These cryptocurrencies are designed to maintain a stable value relative to a traditional currency (like the US dollar) or another asset (like gold). The most widely circulated stablecoin is Tether (USDT). Stablecoins are crucial for trading and for the use of cryptocurrencies in decentralized financial applications (DeFi), providing a less volatile form of "digital money." They play a fundamental role in countries with high inflation, where the value of the local currency can erode rapidly, destroying the savings of the population (Turkey). Stablecoins, being pegged to stable currencies like the US dollar or other assets, offer a safe haven to protect purchasing power over time, as well as an accessible and government-secure digital mode. We will talk about stablecoins in the next article!
- **Non-Fungible Tokens (NFTs):** NFTs represent ownership of unique digital assets, such as digital artwork, collectibles, or even representations of physical goods. They have gained significant popularity and represent a different application of blockchain technology beyond simple currency transactions.
- Beyond the differences in technical and monetary nature, there are also differences at the protocol level. Bitcoin's Proof-of-Work is not the only consensus mechanism; other altcoins use alternative consensus mechanisms to validate transactions and secure the network. The main ones are: Proof-of-Stake (PoS), Delegated Proof-of-Stake (DPoS), Proof-of-Authority (PoA). We will soon have an in-depth look at these different mechanisms!

The altcoin landscape is characterized by continuous experimentation and different approaches to solving the challenges of scalability, security, and decentralization. Each technology and each consensus mechanism involves trade-offs. For example, greater transaction speed might involve less decentralization, or greater functionality might increase the complexity of the protocol and the attack surface.

Bitcoin maximalists adhere to the motto "only Bitcoin exists" for a series of reasons deeply rooted in their understanding of the technology, economics, and philosophy underlying Bitcoin. Here is a technical and conceptual analysis of their motivations:

**1. Technical and Decentralization Superiority:**

- **First-Mover Advantage and Network Effect:** Bitcoin was the first successful decentralized cryptocurrency. This gave it an enormous first-mover advantage and triggered a powerful network effect. The more people, infrastructure, developers, and liquidity focus on Bitcoin, the stronger and more secure the network becomes, making it difficult for new cryptocurrencies to catch up. Maximalists believe this inertia is almost insurmountable.
- **Proven Decentralization:** Bitcoin has demonstrated remarkable resistance to centralization over time. Its globally distributed network of nodes and its relatively decentralized governance (although with ongoing debates) are seen as superior to many other cryptocurrencies that often exhibit more centralized control by foundations, development teams, or significant pre-mines. Maximalists believe that decentralization is fundamental to its resilience against censorship and control by third parties.
- **Robust Security:** Bitcoin's Proof-of-Work (PoW), although energy-intensive, is considered by many maximalists as the most secure and battle-tested consensus mechanism against attacks (especially the 51% attack).
- **Simplicity and Focus:** Bitcoin is designed with a philosophy of "radical simplicity." Its protocol is relatively static and focuses on a single main function: to serve as a decentralized digital store of value and medium of exchange. Maximalists see this focus as a strength, in contrast to altcoins that often add complexity with additional features (smart contracts, on-chain governance, etc.) that could introduce vulnerabilities or deviate from the primary goal.

**2. Economic and Monetary Superiority:**

- **Proven Digital Scarcity:** The maximum limit of 21 million bitcoins is a fundamental feature of its design. Maximalists consider it an unprecedented form of digital scarcity, comparable to gold but with advantages in transferability and verifiability. Many altcoins do not have a limited supply or have different emission mechanisms that maximalists consider inflationary or less predictable.
- **Digital Store of Value:** The main narrative of Bitcoin as a digital store of value ("digital gold") has gained traction over time. Maximalists believe that its scarcity, decentralization, and resistance to censorship make it the most credible form of long-term digital money for wealth preservation.
- **Lindy Effect:** The Lindy effect suggests that the future life expectancy of something is proportional to its current age. Bitcoin, being the oldest cryptocurrency and having survived numerous market cycles and challenges, is seen by maximalists as the most likely to persist in the long term.
- **Fungibility:** Fungibility (the interchangeability of one unit with another) is considered essential for good money. Maximalists argue that Bitcoin's history, with its efforts (albeit not always perfect) to maintain fungibility at the protocol level, is superior to many altcoins that may introduce complexities that undermine its fungibility.

**3. Philosophical and Ideological Reasons:**

- **Decentralization as a Fundamental Principle:** For many maximalists, decentralization is not just a technical feature but an ethical and political imperative. They believe that a decentralized monetary system is essential for individual freedom and to protect against tyranny and censorship by governments or corporations.
- **Resistance to Censorship and Confiscation:** Bitcoin's permissionless and decentralized nature makes it difficult for central authorities to censor or confiscate. This is seen as a crucial advantage in a world where financial freedom can be at risk.
- **Critique of Altcoins:** Maximalists often see altcoins as distractions, attempts to solve non-existent problems, or as schemes to enrich their creators (ICOs, pre-mines). They argue that the proliferation of altcoins fragments liquidity, developer attention, and the overall security of the cryptocurrency network.

All of this is very nice. But I can already imagine your question: what makes Bitcoin unrepeatable? Why hasn't anyone created an alternative, copying its positive features (and perhaps improving some aspects)? I'll answer you very quickly: although it is possible, for fifteen years no one has even come close.

Ultimately, the motto “there’s only Bitcoin" is a concise expression of this complex and articulated view of the cryptocurrency landscape, based on a deep conviction in the technical, economic, and philosophical superiority of Bitcoin over all other alternatives.
