/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* myFunc(int* inorder, int l1, int r1, int* postorder, int l2, int r2) {
    if ((l1 > r1) && (l2 > r2)) {
        return NULL;
    }
    struct TreeNode* root;
    root = (struct TreeNode*) malloc (sizeof(struct TreeNode));
    root->val = postorder[r2];
    if ((l1 == r1) && (l2 == r2)) {
        return root;
    }
    int l1l, l2l, r1l, r2l, r1r, r2r, l1r, l2r, n1;
    for (int i=l1; i<=r1; i++) {
        if (inorder[i] == postorder[r2]) {
            l1l = l1;
            r1l = i-1;
            l1r = i+1;
            r1r = r1;
            n1 = i-1;
            break;
        }
    }
    l2l = l2;
    r2l = n1;
    l2r = n1+1;
    r2r = r2-1;
    root->left = myFunc(inorder, l1l, r1l, postorder, l2l, r2l);
    root->right = myFunc(inorder, l1r, r1r, postorder, l2r, r2r);
    return root;
}

struct TreeNode* buildTree(int* inorder, int inorderSize, int* postorder, int postorderSize) {
    return myFunc(inorder, 0, inorderSize-1, postorder, 0, postorderSize-1);
}

int main() {
    int inorder[3] = {2, 1, 3};
    int postorder[3] = {1, 3, 2};
    struct TreeNode* a = buildTree(inorder, 3, postorder, 3);
    printf("%d %d %d", a->val, a->left->val, a->right->val);
}