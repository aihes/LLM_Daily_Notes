#!/bin/bash
# 合并翻译文件的shell脚本

echo "开始合并翻译文件..."
python merge_translations.py

if [ $? -eq 0 ]; then
    echo "合并成功!"
    echo "合并后的文件位于: docs/translations/interpretability-urgency.md"
else
    echo "合并失败，请检查错误信息。"
fi
