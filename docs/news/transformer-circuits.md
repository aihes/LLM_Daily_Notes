# Transformer电路研究

[Transformer Circuits](https://transformer-circuits.pub/) 是Anthropic公司的一个研究项目，致力于理解大型语言模型的内部工作机制。这个项目通过开发新的解释性工具和方法，试图揭示模型如何表示概念、执行推理和生成文本。

## 最新研究：大型语言模型的生物学

Anthropic最近发布了一项重要研究：[《大型语言模型的生物学》(On the Biology of a Large Language Model)](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)，这项研究使用了一种名为"归因图"(Attribution Graphs)的新方法来研究Claude 3.5 Haiku模型的内部机制。

### 研究亮点

研究团队通过分析模型的内部表示和计算路径，揭示了许多有趣的发现：

1. **多步推理**：模型能够在内部执行多步推理，例如先确定达拉斯位于德克萨斯州，然后确定德克萨斯州的首府是奥斯汀。

2. **诗歌中的规划**：在写诗时，模型会提前规划，在开始写每一行之前就确定可能的押韵词。

3. **多语言电路**：模型使用混合的语言特定和语言无关的电路处理不同语言，更高级的模型有更多语言无关的电路。

4. **加法机制**：研究发现了模型执行加法运算的内部机制，这些机制可以在不同上下文中泛化。

5. **医疗诊断**：模型能够基于症状识别可能的诊断，并在内部推理出需要询问的后续问题。

6. **实体识别与幻觉**：研究揭示了模型如何区分熟悉和不熟悉的实体，以及这些机制如何导致幻觉。

7. **拒绝有害请求**：模型在微调过程中构建了通用的"有害请求"特征，用于识别和拒绝不适当的请求。

8. **越狱分析**：研究分析了一种攻击方法，该方法首先诱导模型开始提供危险指令，然后由于语法规则的压力继续这样做。

9. **思维链的忠实度**：研究探索了模型的思维链推理与其实际机制的一致性。

10. **隐藏目标模型**：研究还应用了这种方法来分析一个具有隐藏目标的模型变体。

### 研究意义

这项研究为我们理解大型语言模型的内部工作机制提供了前所未有的洞察。通过揭示模型如何表示概念、执行推理和生成文本，研究人员希望能够：

- 更好地理解模型的能力和局限性
- 提高模型的可解释性和可控性
- 识别和解决模型中的问题，如幻觉和安全漏洞
- 为未来更安全、更可靠的AI系统开发奠定基础

## 相关资源

- [原始研究论文](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)
- [方法论论文](https://transformer-circuits.pub/2025/attribution-graphs/methods.html)
- [Transformer Circuits项目主页](https://transformer-circuits.pub/)
- [Anthropic研究博客](https://www.anthropic.com/research)

## 延伸阅读

如果您对AI可解释性感兴趣，可以阅读我们的以下文章：

- [可解释性的紧迫性](/translations/interpretability-urgency)（Dario Amodei的文章翻译）
- [可解释性精简总结](/translations/interpretability-summary)
- [可解释性交互式解读](/translations/interpretability-interactive)
